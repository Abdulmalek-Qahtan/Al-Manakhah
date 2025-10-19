import { Cairo } from "next/font/google";

export const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400","500","700","800"],
  variable: "--font-cairo",
  display: "swap",
});
