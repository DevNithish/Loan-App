// --- MOCK API & DATA ---
// To simulate a real backend, this section provides mock data and API functions.
// In a real application, you would replace these calls with actual network requests (e.g., using fetch or axios).

const MOCK_DATA = {
    prebuiltReports: [
        { id: 'loans_overview', name: 'Loans Overview', description: 'A summary of all loan activities.' },
        { id: 'delinquencies', name: 'Delinquencies', description: 'Analysis of overdue loan accounts.' },
        { id: 'collections', name: 'Collections Summary', description: 'Performance of collection activities.' },
        { id: 'repayment_trends', name: 'Repayment Trends', description: 'Trends in loan repayments over time.' },
    ],
    scheduledReports: [
        { id: 'sr_001', name: 'Daily Loan Activity', schedule: 'Daily at 8:00 AM', nextRun: 'Tomorrow', recipient: 'admin@loanpro.io' },
        { id: 'sr_002', name: 'Weekly Portfolio Health', schedule: 'Mondays at 9:00 AM', nextRun: 'Next Monday', recipient: 'management@loanpro.io' },
        { id: 'sr_003', name: 'Monthly Risk Assessment', schedule: '1st of Month', nextRun: 'Next Month', recipient: 'risk-team@loanpro.io' },
    ],
    notifications: [
        { id: 'notif_1', message: 'Loan application #LP-2024-0881 requires approval.', read: false, time: '15m ago' },
        { id: 'notif_2', message: 'Large disbursement of $50,000 processed.', read: false, time: '1h ago' },
        { id: 'notif_3', message: 'System maintenance scheduled for tonight at 11 PM.', read: true, time: '5h ago' },
        { id: 'notif_4', message: 'Report "Q3 Earnings" has been generated.', read: true, time: 'Yesterday' },
    ],
    settings: {
        notifications: {
            newApplications: true,
            overduePayments: true,
            systemAlerts: false,
            dailySummary: true,
        },
    },
    systemLogs: [
        { id: 'log_1', timestamp: '2023-10-27 10:00:15', user: 'admin', action: 'Logged in' },
        { id: 'log_2', timestamp: '2023-10-27 10:05:22', user: 'api_service', action: 'Generated "Daily Report"' },
        { id: 'log_3', timestamp: '2023-10-27 10:11:49', user: 'jane.doe', action: 'Updated permissions for "Agents" role' },
        { id: 'log_4', timestamp: '2023-10-27 10:15:03', user: 'admin', action: 'Viewed system logs' },
    ],
    reportDetails: {
        'loans_overview': [
            { name: 'Approved', value: 450 },
            { name: 'Pending', value: 89 },
            { name: 'Rejected', value: 32 },
            { name: 'Overdue', value: 15 },
        ]
    }
};

export const mockApi = {
    // Simulate network delay
    delay: (ms) => new Promise(resolve => setTimeout(resolve, ms)),

    // Reports API
    getPrebuiltReports: async function() {
        await this.delay(500);
        console.log("API: Fetched prebuilt reports");
        return [...MOCK_DATA.prebuiltReports];
    },
    getScheduledReports: async function() {
        await this.delay(700);
        console.log("API: Fetched scheduled reports");
        return [...MOCK_DATA.scheduledReports];
    },
    getReportDetails: async function(reportId) {
        await this.delay(400);
        console.log(`API: Fetched details for report ${reportId}`);
        return MOCK_DATA.reportDetails[reportId] || [];
    },
    exportReport: async function(reportId, format) {
        await this.delay(1000);
        console.log(`API: Exporting report ${reportId} as ${format}`);
        return { success: true, message: `Report exported as ${format}.` };
    },
    scheduleReport: async function(reportData) {
        await this.delay(800);
        console.log(`API: Scheduling report:`, reportData);
        MOCK_DATA.scheduledReports.push({id: `sr_${Date.now()}`, ...reportData});
        return { success: true, message: 'Report scheduled successfully.'};
    },
    createCustomReport: async function(reportConfig) {
        await this.delay(1200);
        console.log("API: Creating custom report", reportConfig);
        MOCK_DATA.prebuiltReports.push({ id: `custom_${Date.now()}`, ...reportConfig });
        return { success: true, message: 'Custom report created.' };
    },

    // Notifications API
    getNotifications: async function() {
        await this.delay(300);
        return [...MOCK_DATA.notifications];
    },
    markNotificationAsRead: async function(notificationId) {
        await this.delay(200);
        const notif = MOCK_DATA.notifications.find(n => n.id === notificationId);
        if (notif) notif.read = true;
        console.log(`API: Marked notification ${notificationId} as read`);
        return [...MOCK_DATA.notifications];
    },
    clearNotifications: async function() {
        await this.delay(400);
        MOCK_DATA.notifications.forEach(n => n.read = true);
        console.log("API: Cleared notifications");
        return MOCK_DATA.notifications.filter(n => !n.read);
    },

    // Settings API
    getSettings: async function() {
        await this.delay(400);
        console.log("API: Fetched settings");
        return {...MOCK_DATA.settings};
    },
    updateSettings: async function(newSettings) {
        await this.delay(600);
        MOCK_DATA.settings = newSettings;
        console.log("API: Updated settings", newSettings);
        return { success: true, settings: {...MOCK_DATA.settings} };
    },
    getSystemLogs: async function() {
        await this.delay(800);
        console.log("API: Fetched system logs");
        return [...MOCK_DATA.systemLogs];
    },
};
