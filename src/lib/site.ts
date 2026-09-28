export const PHONE_DISPLAY = "021-38884408";
export const PHONE_HREF = "tel:02138884408";
export const EMAIL = "info@dodeliver.com.pk";
export const EMAIL_HREF = "mailto:info@dodeliver.com.pk";

export const ADDRESS_LINES = [
  "77/3 KMCHS, Alamgir Road",
  "Opposite Darul Uloom Amjadiya Masjid",
  "Karachi",
] as const;

export const ADDRESS =
  "77/3 KMCHS Alamgir Road, Opposite Darul Uloom Amjadiya Masjid, Karachi";

export const MAP_QUERY =
  "77/3 KMCHS Alamgir Road, Opposite Darul Uloom Amjadiya Masjid, Karachi, Pakistan";

export const MAP_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

export const MAP_LINK = `https://maps.google.com/?q=${encodeURIComponent(MAP_QUERY)}`;

export const HUB_CITIES = [
  "Karachi",
  "Lahore",
  "Rawalpindi",
  "Islamabad",
  "Multan",
  "Faisalabad",
] as const;
