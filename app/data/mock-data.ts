/*

export type SaleOrderExportReq = {
    isPrintPreview: boolean;
    orderCode: string;
    saleOrderCode: string;
    createDate: string;
    generateByUser: string;
    createByUser: string;
    address: string;
    expectedDeliveryDate: string;
    orderDate?: string | null;
    subTotal: number;
    vatRate: number | 0;
    vat: number | 0;
    grandTotal: number;
    items: SaleOrderItem[];
    customer: Customer | null;
}

export type SaleOrderItem = {
    id: string;
    sku: string
    unitType: UnitType
    qty: number;
    unitPrice: number;
    amount: number | 0;
}

export type Customer = {
    companyId: string
    companyCode: string
    companyName: string
    username: string
    phoneNumber: string
    station: string | null;
}

export interface UnitType {
    id: string;
    code: string;
    name: string;
    description: string;
}

export const MOCK_SALE_ORDER_EXPORT_REQ: SaleOrderExportReq = {
    isPrintPreview: true, // or false, depending on context
    orderCode: "PO202500000198",
    saleOrderCode: "SO202500000065",
    createDate: "2025-10-30T13:41:56.901856",
    generateByUser: "PPC Admin",
    createByUser: "PPC Admin",
    address: "#National Road No. 41, Toul Khlong Village, O Saray Commune, Tram Kak District, Takeo Province",
    expectedDeliveryDate: "2025-11-08T00:00:00",
    orderDate: "2025-10-30T13:39:00.927489", // earliest state createdAt
    subTotal: 3271.0,
    vatRate: 0.1,
    vat: 297.36363636363636,
    grandTotal: 2973.6363636363636,
    items: [
        {
            id: "13203e33-5a84-472a-bbe1-2881afa2bf34",
            sku: "ULR.92",
            qty: 2000,
            unitPrice: 0.8022,
            amount: 1604.4,
            unitType: {
                id: "13BAC38A-5833-46F5-A268-BFB973CFB061",
                code: "REGULAR",
                name: "Regular",
                description: "Regular ប្រេងសាំងធម្មតា",
            },
        },
        {
            id: "74a2b02e-dc81-4d73-b9f2-7dfb1bc8b7b5",
            sku: "ULG.95",
            qty: 2000,
            unitPrice: 0.8333,
            amount: 1666.6,
            unitType: {
                id: "13BAC38A-5833-46F5-A268-BFB973CFB062",
                code: "SUPER",
                name: "Super",
                description: "Super សាំងស៊ុពែរ",
            },
        },
    ],
    customer: {
        companyId: "3C7867A3-64EF-437B-9F12-B27EFE1456EC",
        companyCode: "CI00000029",
        companyName: "BRIGHT WILLS CO., LTD.",
        username: "BRIGHT WILLS CO., LTD.", // not in API, fallback to name
        phoneNumber: "012 728 779",
        station: "Tropaing Anderk Road 41",
    },
};
*/
