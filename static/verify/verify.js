"use strict";

const idPattern = /^[A-Za-z0-9]{1,12}-\d{8}T\d{6}-[a-f0-9]{12}$/;
const message = document.getElementById("message");
const fileInput = document.getElementById("file");
const hashResult = document.getElementById("hash-result");
let expectedHash = null;

async function showRecord() {
  const id = new URLSearchParams(window.location.search).get("id");
  if (!id) return;
  if (!idPattern.test(id)) {
    message.textContent = "Invalid registration ID.";
    return;
  }
  try {
    const response = await fetch(`records/${encodeURIComponent(id)}.json`, { cache: "no-store" });
    if (!response.ok) throw new Error("Record unavailable");
    const record = await response.json();
    if (record.schema_version !== 1 || record.id !== id) throw new Error("Invalid record");
    const labels = [["Signer", "signer"], ["Document", "document"], ["Place", "place"],
      ["Registered at", "registered_at"], ["Record ID", "id"], ["Status", "status"]];
    for (const [label, key] of labels) {
      if (typeof record[key] !== "string") throw new Error("Invalid record fields");
      const term = document.createElement("dt");
      const value = document.createElement("dd");
      term.textContent = label;
      value.textContent = record[key]; // Treat all publisher data as plain text.
      document.getElementById("details").append(term, value);
    }
    message.textContent = "Registration record found. Compare the details below.";
    document.getElementById("record").hidden = false;
    const note = document.getElementById("hash-note");
    if (typeof record.sha256 === "string" && /^[a-f0-9]{64}$/.test(record.sha256)) {
      expectedHash = record.sha256;
      note.textContent = `Registered SHA-256: ${expectedHash}. Hash registered at: ${record.hash_registered_at}. Any byte change, including a later save, changes the fingerprint.`;
      if (window.isSecureContext && window.crypto?.subtle) {
        fileInput.disabled = false;
      } else {
        hashResult.textContent = "File comparison requires HTTPS or localhost.";
      }
    } else {
      note.textContent = "No final file fingerprint is registered. This record cannot detect reuse of its signature and QR on another file.";
    }
  } catch {
    message.textContent = "No usable registration record is available at this address. It may be unpublished or the site may be unavailable.";
    document.getElementById("record").hidden = true;
  }
}

fileInput.addEventListener("change", async () => {
  const file = fileInput.files[0];
  if (!file || !expectedHash) return;
  if (file.size > 100 * 1024 * 1024) {
    hashResult.textContent = "For files larger than 100 MiB, compute SHA-256 locally and compare it with the displayed value.";
    return;
  }
  fileInput.disabled = true;
  hashResult.textContent = "Computing SHA-256 locally…";
  try {
    const bytes = await window.crypto.subtle.digest("SHA-256", await file.arrayBuffer());
    const actual = Array.from(new Uint8Array(bytes), byte => byte.toString(16).padStart(2, "0")).join("");
    hashResult.textContent = actual === expectedHash
      ? "Match: this file has the registered fingerprint. This does not independently establish who created or signed it."
      : "Mismatch: this file differs from the registered final file.";
  } catch {
    hashResult.textContent = "Could not read or hash this file. Try a local SHA-256 tool.";
  } finally {
    fileInput.disabled = false;
  }
});

showRecord();
