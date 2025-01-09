
export const easypisaWalletUtils = [
    { title: 'Mobile Account/Wallet', src: 'https://oneid.veevotech.com/frontend_assets/images/MA.png' },
    { title: 'Credit/Debit Card', src: 'https://oneid.veevotech.com/frontend_assets/images/CCPAY.png' },
]

export const jazzcashUtils = [
    { title: 'Pay at Shop/Online', src: 'https://oneid.veevotech.com/frontend_assets/images/CCPAY.png' },
    { title: 'Mobile Account/Wallet', src: 'https://oneid.veevotech.com/frontend_assets/images/MA.png' },
    { title: 'Credit/Debit Card', src: 'https://oneid.veevotech.com/frontend_assets/images/CCPAY.png' },
]
export const directDepositUtils = [
    { title: 'Cheque', src: 'https://oneid.veevotech.com/frontend_assets/images/CCPAY.png' },
    { title: 'Deposit', src: 'https://oneid.veevotech.com/frontend_assets/images/CCPAY.png' },
]

export const InvoicesUtils = [
    { url: 'https://oneid.veevotech.com/frontend_assets/images/personal.png', title: 'Dashboard', },
    { url: 'https://oneid.veevotech.com/frontend_assets/images/1w-subscription.png', title: 'Manage Invoices' }
]
export const ViewTrxNavigation = [
    { url: 'https://oneid.veevotech.com/frontend_assets/images/personal.png', title: 'Dashboard', },
    { url: 'https://oneid.veevotech.com/frontend_assets/images/1w-subscription.png', title: 'Subscription' }
]
export const keyPerformance = [
    { amount: '117', currency: "PKR", credit: "Total Credit", includes: 'Including all Subscription' },
    { amount: '115.4', currency: "PKR", credit: "Net Spent (Debit)", includes: 'Spent amount minus Refunds' },
    { amount: '5', currency: "", credit: "", includes: 'Total Transactions [Credit]' },
    { amount: '25', currency: "", credit: "", includes: 'Total Transactions [Debit]' },
]



export const subscriptionCards = [
    { value: '4', title: 'Total Due Invoices' },
    { value: '13', title: 'Pending Order' }
]

export const MySubscriptionTableHeads = [
    { title: "Order#" },
    { title: "Product" },
    { title: "Items" },
    { title: "Generated Date" },
    { title: "Due Date" },
    { title: "Charges" },
    { title: "View Invoice" },
    { title: "Action" },

]

export const subscriptionTableHead = [
    "Order #", "Item Name", "Subscription Type", "Next Due", "Action"
]
export const subscriptionTableData = [
    { orderNo: '1', productName: 'WhatsApp Api', subscriptionType: 'WhatsApp Balance', nextDue: '31,Jan,1970', action: 'Pay' },
]

export const MySubscriptionTableData = [
    { orderNo: '1', product: 'WhatsApp Api', items: '12', gDate: '31,Jan,1970', dueDate: '31,Jan,1970', charges: '12 $', viewInvoice: '1334', action: 'Pay' },
]

// paid invoices
export const payInvoiceTableHead = ["Order#", "Product Items", "Items", "Generated Date", "Amount", "View Invoice"]
export const payInvoiceTableData = [
    { orderNo: "OID-SO-19125", productName: 'WhatsApp API', items: '1', gDate: '31Jan, 2024', amount: '2.04', viewInvoice: '34759' },
]
export const viewHistory = [
    "Description", "Date", "Amount [PKR]", "Status"
]
export const viewHistoryData = [
    { description: 'Testing scenario oneID', date: '31Jan, 2024', amount: '2.04', status: "Approved" },
    { description: 'Testing scenario oneID', date: '31Jan, 2024', amount: '2.04', status: "Approved" },
    { description: 'Testing scenario oneID', date: '31Jan, 2024', amount: '2.04', status: "Approved" },
    { description: 'Testing scenario oneID', date: '31Jan, 2024', amount: '2.04', status: "Approved" },
]

export const quickStatement = ['Purpose', "Date", "Amount [PKR]", "In / Out", "Balance [PKR]",]
export const quickStatementData = [
    {

        purposeTitle: 'Bill#4d546b784d6a553d against WhatsApp Balance of WhatsApp API',
        date: '31 Jan, 2024',
        amount: '2.04',
        inOut: 'In',
        balance: '10.00',
    },
    {

        purposeTitle: 'Online Deposit via VT PG - Bill#VT-OneID-aa7051855f',
        date: '31 Jan, 2024',
        amount: '2.04',
        inOut: 'Out',
        balance: '10.00',
    },
    {

        purposeTitle: 'Online Deposit via VT PG - Bill#VT-OneID-aa7051855f',
        date: '31 Jan, 2024',
        amount: '2.04',
        inOut: 'In',
        balance: '10.00',
    },
    {

        purposeTitle: 'Online Deposit via VT PG - Bill#VT-OneID-aa7051855f',
        date: '31 Jan, 2024',
        amount: '2.04',
        inOut: 'Out',
        balance: '10.00',
    },
]