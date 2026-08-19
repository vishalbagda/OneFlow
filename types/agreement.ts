export type AgreementStatus = "draft" | "paid" | "signed" | "registered";
export type PartyRole = "landlord" | "tenant" | "witness";
export interface Agreement { id: string; propertyAddress: string; rentAmount: number; depositAmount: number; durationMonths: number; startDate: string; status: AgreementStatus; }
export interface Party { id: string; agreementId: string; role: PartyRole; name: string; mockAadhaarLast4: string; mockMobile: string; signed: boolean; }
export interface StampDuty { agreementId: string; calculatedAmount: number; breakdown: { rentComponent: number; depositComponent: number; notionalInterest: number; }; }
export interface Payment { agreementId: string; amount: number; status: "pending" | "success"; }
export interface RegisteredDocument { agreementId: string; mockReferenceNumber: string; issuedAt: string; downloadUrl: string; }
