// Satori can't draw the glass logo's filters and masks as inline SVG, so the
// icon and wordmark go in as SVG images, which resvg renders in full.
const ICON_SVG =
	'<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="10" fill="#20242D"/><path d="M7 20C10.5 13.5 15 10.5 20 10.5S29.5 13.5 33 20C29.5 26.5 25 29.5 20 29.5S10.5 26.5 7 20Z" stroke="#F6F7F9" stroke-width="2.6" stroke-linejoin="round"/><circle cx="20" cy="20" r="5.2" fill="#30A46C"/><circle cx="20" cy="20" r="2" fill="#F6F7F9"/></svg>';

const WORDMARK_SVG =
	'<svg xmlns="http://www.w3.org/2000/svg" width="58" height="40" viewBox="46 0 58 40" fill="none"><g stroke="#20242D" stroke-width="4.2" stroke-linecap="round" stroke-linejoin="round"><path d="M50 10.5V29.5"/><circle cx="62" cy="23" r="6.3"/><circle cx="78.5" cy="23" r="6.3"/><path d="M92 10.5V29.5M100.5 16.8L93.6 23.4M95.6 21.6L101 29.5"/></g><circle cx="78.5" cy="23" r="2.2" fill="#30A46C"/></svg>';

const toDataUri = (svg: string) =>
	`data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;

export const CAP_ICON_DATA_URI = toDataUri(ICON_SVG);
export const CAP_WORDMARK_DATA_URI = toDataUri(WORDMARK_SVG);

// WORDMARK_SVG's viewBox is 58x40 and starts 6 units right of the 40-unit
// icon, the same gap as the full logo.
export const CAP_WORDMARK_ASPECT = 58 / 40;
export const CAP_WORDMARK_GAP = 6 / 40;
