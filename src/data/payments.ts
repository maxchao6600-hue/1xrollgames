import type { PaymentMethod } from "@/types/content";

/**
 * Payment methods mirrored from published brand FAQ / platform orientation.
 * Do not invent additional rails without evidence.
 */
export const paymentMethods: PaymentMethod[] = [
  {
    id: "my-banks",
    name: { en: "Malaysian banks", zh: "马来西亚银行" },
    kind: "bank",
    summary: {
      en: "Bank transfer options commonly used on the 1XROLL platform wallet. Availability can vary by account and region.",
      zh: "1XROLL 平台钱包常用的银行转账方式。可用性可能因账户与地区而异。",
    },
  },
  {
    id: "duitnow",
    name: { en: "DuitNow", zh: "DuitNow" },
    kind: "ewallet",
    summary: {
      en: "Local instant transfer rail referenced for Malaysian players on the platform.",
      zh: "平台面向马来西亚玩家提及的本地即时转账通道。",
    },
  },
  {
    id: "touch-n-go",
    name: { en: "Touch 'n Go", zh: "Touch 'n Go" },
    kind: "ewallet",
    summary: {
      en: "E-wallet funding option listed among platform payment methods.",
      zh: "平台支付方式中列出的电子钱包入金选项。",
    },
  },
  {
    id: "grabpay",
    name: { en: "GrabPay", zh: "GrabPay" },
    kind: "ewallet",
    summary: {
      en: "E-wallet option referenced for platform deposits where available.",
      zh: "在可用地区作为平台入金参考的电子钱包选项。",
    },
  },
  {
    id: "boost",
    name: { en: "Boost", zh: "Boost" },
    kind: "ewallet",
    summary: {
      en: "E-wallet option referenced alongside other Malaysian digital wallets.",
      zh: "与其他马来西亚数字钱包一并提及的电子钱包选项。",
    },
  },
  {
    id: "usdt",
    name: { en: "USDT & crypto", zh: "USDT 与加密货币" },
    kind: "crypto",
    summary: {
      en: "Cryptocurrency funding including USDT. Confirm networks and limits inside the platform wallet.",
      zh: "包括 USDT 在内的加密货币入金。网络与限额请在平台钱包内确认。",
    },
  },
];

export function getPaymentMethodsByKind(kind: PaymentMethod["kind"]) {
  return paymentMethods.filter((m) => m.kind === kind);
}
