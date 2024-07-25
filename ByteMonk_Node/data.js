const reports = [
    { 
        "id": 1, 
        "user": "John Doe", 
        "category": "Phishing", 
        "details": "Phishing email received", 
        "timestamp": "2024-07-18T12:34:56Z", 
        "ipAddress": "192.168.0.1" 
    },
    { 
        "id": 2, 
        "user": "Jane Smith", 
        "category": "Malware", 
        "details": "Malware detected", 
        "timestamp": "2024-07-19T08:22:45Z", 
        "ipAddress": "192.168.0.2" 
    },
    { 
        "id": 3, 
        "user": "Vibe Smith", 
        "category": "Adware", 
        "details": "Adware detected", 
        "timestamp": "2024-07-19T08:22:45Z", 
        "ipAddress": "192.168.0.2" 
    },
    { 
        "id": 4, 
        "user": "Sumit Smith", 
        "category": "Spyware", 
        "details": "Spyware detected", 
        "timestamp": "2024-07-19T08:22:45Z", 
        "ipAddress": "192.168.0.2" 
    },
    { 
        "id": 5, 
        "user": "Alice Johnson", 
        "category": "Phishing", 
        "details": "Suspicious link in email", 
        "timestamp": "2024-07-20T09:15:30Z", 
        "ipAddress": "192.168.0.3" 
    },
    { 
        "id": 6, 
        "user": "Bob Brown", 
        "category": "Malware", 
        "details": "Virus alert", 
        "timestamp": "2024-07-21T10:40:50Z", 
        "ipAddress": "192.168.0.4" 
    },
    { 
        "id": 7, 
        "user": "Charlie Davis", 
        "category": "Adware", 
        "details": "Pop-up ads detected", 
        "timestamp": "2024-07-22T11:05:15Z", 
        "ipAddress": "192.168.0.5" 
    },
    { 
        "id": 8, 
        "user": "Diana Evans", 
        "category": "Spyware", 
        "details": "Spyware alert", 
        "timestamp": "2024-07-23T12:25:40Z", 
        "ipAddress": "192.168.0.6" 
    },
    { 
        "id": 9, 
        "user": "Edward Harris", 
        "category": "Phishing", 
        "details": "Phishing attempt detected", 
        "timestamp": "2024-07-24T13:50:00Z", 
        "ipAddress": "192.168.0.7" 
    },
    { 
        "id": 10, 
        "user": "Fiona Green", 
        "category": "Malware", 
        "details": "Malware found", 
        "timestamp": "2024-07-25T14:15:25Z", 
        "ipAddress": "192.168.0.8" 
    },
    { 
        "id": 11, 
        "user": "George Hill", 
        "category": "Adware", 
        "details": "Adware alert", 
        "timestamp": "2024-07-26T15:35:45Z", 
        "ipAddress": "192.168.0.9" 
    },
    { 
        "id": 12, 
        "user": "Helen Isaac", 
        "category": "Spyware", 
        "details": "Spyware detected", 
        "timestamp": "2024-07-27T16:00:10Z", 
        "ipAddress": "192.168.0.10" 
    },
    { 
        "id": 13, 
        "user": "Ian Jackson", 
        "category": "Phishing", 
        "details": "Phishing website blocked", 
        "timestamp": "2024-07-28T17:20:35Z", 
        "ipAddress": "192.168.0.11" 
    },
    { 
        "id": 14, 
        "user": "Jackie King", 
        "category": "Malware", 
        "details": "Malware removed", 
        "timestamp": "2024-07-29T18:45:00Z", 
        "ipAddress": "192.168.0.12" 
    },
    { 
        "id": 15, 
        "user": "Karen Lewis", 
        "category": "Adware", 
        "details": "Adware issue resolved", 
        "timestamp": "2024-07-30T19:05:20Z", 
        "ipAddress": "192.168.0.13" 
    },
    { 
        "id": 16, 
        "user": "Larry Moore", 
        "category": "Spyware", 
        "details": "Spyware found", 
        "timestamp": "2024-07-31T20:30:45Z", 
        "ipAddress": "192.168.0.14" 
    },
    { 
        "id": 17, 
        "user": "Mona Nelson", 
        "category": "Phishing", 
        "details": "Phishing email flagged", 
        "timestamp": "2024-08-01T21:55:10Z", 
        "ipAddress": "192.168.0.15" 
    },
    { 
        "id": 18, 
        "user": "Nathan Oliver", 
        "category": "Malware", 
        "details": "Malware alert", 
        "timestamp": "2024-08-02T22:20:35Z", 
        "ipAddress": "192.168.0.16" 
    },
    { 
        "id": 19, 
        "user": "Olivia Parker", 
        "category": "Adware", 
        "details": "Adware issue detected", 
        "timestamp": "2024-08-03T23:45:00Z", 
        "ipAddress": "192.168.0.17" 
    },
    { 
        "id": 20, 
        "user": "Paul Quinn", 
        "category": "Spyware", 
        "details": "Spyware issue", 
        "timestamp": "2024-08-04T00:05:25Z", 
        "ipAddress": "192.168.0.18" 
    },
    { 
        "id": 21, 
        "user": "Quincy Roberts", 
        "category": "Phishing", 
        "details": "Phishing scam detected", 
        "timestamp": "2024-08-05T01:30:50Z", 
        "ipAddress": "192.168.0.19" 
    },
    { 
        "id": 22, 
        "user": "Rachel Scott", 
        "category": "Malware", 
        "details": "Malware found on device", 
        "timestamp": "2024-08-06T02:55:15Z", 
        "ipAddress": "192.168.0.20" 
    },
    { 
        "id": 23, 
        "user": "Steve Taylor", 
        "category": "Adware", 
        "details": "Adware detected on system", 
        "timestamp": "2024-08-07T03:15:40Z", 
        "ipAddress": "192.168.0.21" 
    },
    { 
        "id": 24, 
        "user": "Tina Underwood", 
        "category": "Spyware", 
        "details": "Spyware alert received", 
        "timestamp": "2024-08-08T04:35:05Z", 
        "ipAddress": "192.168.0.22" 
    },
    { 
        "id": 25, 
        "user": "Uma Vargas", 
        "category": "Phishing", 
        "details": "Phishing attempt blocked", 
        "timestamp": "2024-08-09T05:00:30Z", 
        "ipAddress": "192.168.0.23" 
    },
    { 
        "id": 26, 
        "user": "Victor White", 
        "category": "Malware", 
        "details": "Malware issue resolved", 
        "timestamp": "2024-08-10T06:25:55Z", 
        "ipAddress": "192.168.0.24" 
    },
    { 
        "id": 27, 
        "user": "Wendy Xu", 
        "category": "Adware", 
    }]
// Convert timestamp to a different format
reports.forEach(report => {
  const date = new Date(report.timestamp);
  report.formattedDate = date.toLocaleString(); // Example: "7/18/2024, 12:34:56 PM"
});

module.exports = reports;
