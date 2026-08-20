/**
 * Helper to process Google Drive URLs for embedded preview, direct download, and thumbnail preview
 */

export function extractDriveFileId(url: string | undefined | null): string | null {
  if (!url || typeof url !== 'string') return null;
  // Match patterns like /file/d/{id}/ or id={id} or /d/{id}
  const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || 
                url.match(/\/d\/([a-zA-Z0-9_-]+)/) ||
                url.match(/id=([a-zA-Z0-9_-]+)/) ||
                url.match(/\/document\/d\/([a-zA-Z0-9_-]+)/) ||
                url.match(/\/spreadsheets\/d\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

export function getDrivePreviewUrl(url: string | undefined | null, type: 'ebook' | 'slide' | 'default' = 'default'): string {
  if (!url) return '';
  const fileId = extractDriveFileId(url);
  if (!fileId) return url;
  
  // For docs or sheets
  if (url.includes('spreadsheets')) {
    return `https://docs.google.com/spreadsheets/d/${fileId}/preview`;
  }
  if (url.includes('document')) {
    return `https://docs.google.com/document/d/${fileId}/preview`;
  }

  // Google Drive standard preview
  let previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  if (type === 'ebook') {
    previewUrl += '#toolbar=1&navpanes=0&scrollbar=1';
  } else if (type === 'slide') {
    previewUrl += '#toolbar=0&navpanes=0&scrollbar=1';
  }
  return previewUrl;
}

export function getDriveDownloadUrl(url: string | undefined | null): string {
  if (!url) return '';
  const fileId = extractDriveFileId(url);
  if (!fileId) return url;
  return `https://drive.google.com/uc?export=download&id=${fileId}`;
}

export function getDriveDirectViewUrl(url: string | undefined | null): string {
  if (!url) return '';
  const fileId = extractDriveFileId(url);
  if (!fileId) return url;
  return `https://drive.google.com/file/d/${fileId}/view`;
}

export function getDriveThumbnailUrl(url: string | undefined | null, width = 800): string {
  if (!url) return '';
  const fileId = extractDriveFileId(url);
  if (!fileId) return '';
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w${width}`;
}
