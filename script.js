const patients = [
    { id: 1, name: 'Rahul Sharma', guardian: 'Amit Sharma', nurse: 'Nurse A', reason: 'Surgery', 
      medications: ['Paracetamol', 'Amoxicillin'], dosage: ['500mg', '250mg'], frequency: ['Every 6 hours', 'Twice a day'], 
      dripLevel: 100, payments: 500, precautions: 'Rest and hydration' },
    { id: 2, name: 'Anjali Verma', guardian: 'Raj Verma', nurse: 'Nurse B', reason: 'Flu', 
      medications: ['Oseltamivir'], dosage: ['75mg'], frequency: ['Twice a day'], 
      dripLevel: 80, payments: 200, precautions: 'Stay hydrated' },
    { id: 3, name: 'Mohit Gupta', guardian: 'Sunita Gupta', nurse: 'Nurse C', reason: 'Appendicitis', 
      medications: ['Ibuprofen', 'Antibiotic'], dosage: ['600mg', '500mg'], frequency: ['Every 8 hours', 'Once daily'], 
      dripLevel: 60, payments: 300, precautions: 'Avoid heavy meals' },
    { id: 4, name: 'Sneha Joshi', guardian: 'Anil Joshi', nurse: 'Nurse D', reason: 'Headache', 
      medications: ['Aspirin'], dosage: ['300mg'], frequency: ['Once every 6 hours'], 
      dripLevel: 90, payments: 150, precautions: 'Rest in a dark room' },
    { id: 5, name: 'Karan Mehta', guardian: 'Deepa Mehta', nurse: 'Nurse E', reason: 'Fracture', 
      medications: ['Pain relief', 'Calcium'], dosage: ['500mg', '250mg'], frequency: ['Every 8 hours', 'Once daily'], 
      dripLevel: 50, payments: 400, precautions: 'Avoid movement' },
    { id: 6, name: 'Priya Singh', guardian: 'Vikram Singh', nurse: 'Nurse F', reason: 'Diabetes', 
      medications: ['Metformin'], dosage: ['1000mg'], frequency: ['Twice a day'], 
      dripLevel: 70, payments: 350, precautions: 'Monitor blood sugar' },
    { id: 7, name: 'Rajesh Sharma', guardian: 'Manju Sharma', nurse: 'Nurse G', reason: 'High BP', 
      medications: ['Amlodipine'], dosage: ['5mg'], frequency: ['Once daily'], 
      dripLevel: 95, payments: 250, precautions: 'Limit salt intake' },
    { id: 8, name: 'Neha Kapoor', guardian: 'Pankaj Kapoor', nurse: 'Nurse H', reason: 'Allergy', 
      medications: ['Cetirizine'], dosage: ['10mg'], frequency: ['Once daily'], 
      dripLevel: 85, payments: 180, precautions: 'Avoid allergens' },
    { id: 9, name: 'Suresh Patel', guardian: 'Geeta Patel', nurse: 'Nurse I', reason: 'Pneumonia', 
      medications: ['Antibiotic'], dosage: ['500mg'], frequency: ['Every 6 hours'], 
      dripLevel: 75, payments: 450, precautions: 'Avoid cold' },
    { id: 10, name: 'Aisha Khan', guardian: 'Mohammed Khan', nurse: 'Nurse J', reason: 'Migraine', 
      medications: ['Sumatriptan'], dosage: ['50mg'], frequency: ['As needed'], 
      dripLevel: 65, payments: 200, precautions: 'Rest and dark room' },
    { id: 11, name: 'Shivani Rao', guardian: 'Ajay Rao', nurse: 'Nurse K', reason: 'Anemia', 
      medications: ['Iron supplements'], dosage: ['100mg'], frequency: ['Once daily'], 
      dripLevel: 55, payments: 220, precautions: 'Eat iron-rich foods' },
    { id: 12, name: 'Vikrant Iyer', guardian: 'Riya Iyer', nurse: 'Nurse L', reason: 'Thyroid', 
      medications: ['Levothyroxine'], dosage: ['50mcg'], frequency: ['Once daily'], 
      dripLevel: 80, payments: 300, precautions: 'Regular tests' },
    { id: 13, name: 'Deepak Nair', guardian: 'Rani Nair', nurse: 'Nurse M', reason: 'Hernia', 
      medications: ['Pain relief'], dosage: ['400mg'], frequency: ['As needed'], 
      dripLevel: 40, payments: 370, precautions: 'Avoid heavy lifting' },
    { id: 14, name: 'Sonia Patel', guardian: 'Raj Patel', nurse: 'Nurse N', reason: 'Cholecystitis', 
      medications: ['Pain relief', 'Antibiotic'], dosage: ['500mg', '500mg'], frequency: ['Every 8 hours', 'Once daily'], 
      dripLevel: 30, payments: 290, precautions: 'Diet control' },
    { id: 15, name: 'Kajal Verma', guardian: 'Pramod Verma', nurse: 'Nurse O', reason: 'Kidney Stone', 
      medications: ['Pain relief', 'Hydration'], dosage: ['200mg', 'Drink plenty'], frequency: ['Every 6 hours', 'As needed'], 
      dripLevel: 20, payments: 350, precautions: 'Stay hydrated' },
    { id: 16, name: 'Ankit Kumar', guardian: 'Neelam Kumar', nurse: 'Nurse P', reason: 'Back Pain', 
      medications: ['Ibuprofen'], dosage: ['400mg'], frequency: ['Every 8 hours'], 
      dripLevel: 10, payments: 150, precautions: 'Physical therapy' },
    { id: 17, name: 'Manisha Desai', guardian: 'Chirag Desai', nurse: 'Nurse Q', reason: 'Skin Rash', 
      medications: ['Antihistamine'], dosage: ['10mg'], frequency: ['Once daily'], 
      dripLevel: 60, payments: 210, precautions: 'Avoid scratching' },
    { id: 18, name: 'Rohit Sethi', guardian: 'Sunita Sethi', nurse: 'Nurse R', reason: 'Stroke', 
      medications: ['Blood thinners'], dosage: ['5mg'], frequency: ['Once daily'], 
      dripLevel: 90, payments: 500, precautions: 'Immediate care needed' },
    { id: 19, name: 'Nikita Soni', guardian: 'Raj Soni', nurse: 'Nurse S', reason: 'Heart Condition', 
      medications: ['Beta-blockers'], dosage: ['50mg'], frequency: ['Once daily'], 
      dripLevel: 80, payments: 250, precautions: 'Regular check-ups' },
    { id: 20, name: 'Yash Garg', guardian: 'Anju Garg', nurse: 'Nurse T', reason: 'Asthma', 
      medications: ['Inhaler'], dosage: ['As needed'], frequency: ['Every 4 hours'], 
      dripLevel: 75, payments: 300, precautions: 'Avoid triggers' },
    { id: 21, name: 'Simran Bansal', guardian: 'Manoj Bansal', nurse: 'Nurse U', reason: 'Osteoporosis', 
      medications: ['Calcium'], dosage: ['600mg'], frequency: ['Once daily'], 
      dripLevel: 70, payments: 250, precautions: 'Weight-bearing exercises' },
    { id: 22, name: 'Arjun Patil', guardian: 'Geeta Patil', nurse: 'Nurse V', reason: 'Gastroenteritis', 
      medications: ['Oral rehydration salts'], dosage: ['As needed'], frequency: ['Every 6 hours'], 
      dripLevel: 90, payments: 200, precautions: 'Stay hydrated' },
    { id: 23, name: 'Siddharth Nair', guardian: 'Prerna Nair', nurse: 'Nurse W', reason: 'Cough', 
      medications: ['Cough syrup'], dosage: ['10ml'], frequency: ['Every 4 hours'], 
      dripLevel: 60, payments: 190, precautions: 'Avoid cold drinks' },
    { id: 24, name: 'Deepali Singh', guardian: 'Pradeep Singh', nurse: 'Nurse X', reason: 'Conjunctivitis', 
      medications: ['Eye drops'], dosage: ['As prescribed'], frequency: ['Every 6 hours'], 
      dripLevel: 50, payments: 230, precautions: 'Avoid touching eyes' },
    { id: 25, name: 'Vaibhav Choudhary', guardian: 'Anita Choudhary', nurse: 'Nurse Y', reason: 'Heartburn', 
      medications: ['Antacid'], dosage: ['10ml'], frequency: ['As needed'], 
      dripLevel: 40, payments: 210, precautions: 'Avoid spicy food' },
    { id: 26, name: 'Kriti Mehta', guardian: 'Anuj Mehta', nurse: 'Nurse Z', reason: 'Sinusitis', 
      medications: ['Nasal spray'], dosage: ['As needed'], frequency: ['Every 4 hours'], 
      dripLevel: 30, payments: 180, precautions: 'Stay hydrated' },
    { id: 27, name: 'Amit Bhardwaj', guardian: 'Suman Bhardwaj', nurse: 'Nurse AA', reason: 'Dental Issue', 
      medications: ['Pain relief'], dosage: ['500mg'], frequency: ['As needed'], 
      dripLevel: 20, payments: 200, precautions: 'Avoid hard food' },
    { id: 28, name: 'Sakshi Reddy', guardian: 'Sandeep Reddy', nurse: 'Nurse AB', reason: 'Influenza', 
      medications: ['Antiviral'], dosage: ['75mg'], frequency: ['Twice a day'], 
      dripLevel: 60, payments: 190, precautions: 'Rest and hydration' },
    { id: 29, name: 'Nandini Gupta', guardian: 'Ankit Gupta', nurse: 'Nurse AC', reason: 'Chickenpox', 
      medications: ['Antihistamine'], dosage: ['10mg'], frequency: ['Once daily'], 
      dripLevel: 80, payments: 250, precautions: 'Avoid scratching' },
    { id: 30, name: 'Aarav Sharma', guardian: 'Sanjay Sharma', nurse: 'Nurse AD', reason: 'Gout', 
      medications: ['Colchicine'], dosage: ['500mg'], frequency: ['Every 6 hours'], 
      dripLevel: 90, payments: 300, precautions: 'Avoid purines' },
    { id: 31, name: 'Charu Jain', guardian: 'Rohan Jain', nurse: 'Nurse AE', reason: 'Bronchitis', 
      medications: ['Corticosteroids'], dosage: ['40mg'], frequency: ['Once daily'], 
      dripLevel: 70, payments: 220, precautions: 'Avoid smoke' },
    { id: 32, name: 'Pratik Singh', guardian: 'Suman Singh', nurse: 'Nurse AF', reason: 'Depression', 
      medications: ['Antidepressants'], dosage: ['50mg'], frequency: ['Once daily'], 
      dripLevel: 60, payments: 250, precautions: 'Regular counseling' },
    { id: 33, name: 'Kavya Sharma', guardian: 'Vikram Sharma', nurse: 'Nurse AG', reason: 'Eczema', 
      medications: ['Topical cream'], dosage: ['As prescribed'], frequency: ['Twice daily'], 
      dripLevel: 80, payments: 300, precautions: 'Moisturize regularly' },
    { id: 34, name: 'Rahul Iyer', guardian: 'Seema Iyer', nurse: 'Nurse AH', reason: 'Psoriasis', 
      medications: ['Topical treatment'], dosage: ['As prescribed'], frequency: ['Daily'], 
      dripLevel: 50, payments: 220, precautions: 'Avoid triggers' },
    { id: 35, name: 'Alok Joshi', guardian: 'Vinita Joshi', nurse: 'Nurse AI', reason: 'Allergic Reaction', 
      medications: ['Antihistamine'], dosage: ['10mg'], frequency: ['As needed'], 
      dripLevel: 70, payments: 210, precautions: 'Identify allergen' },
    { id: 36, name: 'Tanvi Patel', guardian: 'Dharmesh Patel', nurse: 'Nurse AJ', reason: 'Severe Fatigue', 
      medications: ['Vitamin supplements'], dosage: ['As prescribed'], frequency: ['Once daily'], 
      dripLevel: 60, payments: 190, precautions: 'Rest and nutrition' },
    { id: 37, name: 'Ravi Agarwal', guardian: 'Meena Agarwal', nurse: 'Nurse AK', reason: 'Fever', 
      medications: ['Paracetamol'], dosage: ['500mg'], frequency: ['Every 6 hours'], 
      dripLevel: 90, payments: 250, precautions: 'Stay hydrated' },
    { id: 38, name: 'Siddhi Naik', guardian: 'Kunal Naik', nurse: 'Nurse AL', reason: 'Hypothyroidism', 
      medications: ['Levothyroxine'], dosage: ['100mcg'], frequency: ['Once daily'], 
      dripLevel: 80, payments: 300, precautions: 'Regular tests' },
    { id: 39, name: 'Rohan Verma', guardian: 'Sunita Verma', nurse: 'Nurse AM', reason: 'Hyperlipidemia', 
      medications: ['Statins'], dosage: ['10mg'], frequency: ['Once daily'], 
      dripLevel: 70, payments: 220, precautions: 'Diet control' },
    { id: 40, name: 'Neeraj Gupta', guardian: 'Kiran Gupta', nurse: 'Nurse AN', reason: 'Acid Reflux', 
      medications: ['Proton pump inhibitor'], dosage: ['20mg'], frequency: ['Once daily'], 
      dripLevel: 50, payments: 200, precautions: 'Avoid spicy food' },
    { id: 41, name: 'Nisha Khan', guardian: 'Zahid Khan', nurse: 'Nurse AO', reason: 'Chronic Fatigue', 
      medications: ['Energy boosters'], dosage: ['As prescribed'], frequency: ['Once daily'], 
      dripLevel: 60, payments: 150, precautions: 'Adequate rest' },
    { id: 42, name: 'Tarun Bansal', guardian: 'Jaya Bansal', nurse: 'Nurse AP', reason: 'Lung Infection', 
      medications: ['Antibiotic'], dosage: ['500mg'], frequency: ['Every 6 hours'], 
      dripLevel: 40, payments: 250, precautions: 'Avoid cold air' },
    { id: 43, name: 'Reena Choudhary', guardian: 'Vikram Choudhary', nurse: 'Nurse AQ', reason: 'Chronic Cough', 
      medications: ['Cough syrup'], dosage: ['10ml'], frequency: ['Every 4 hours'], 
      dripLevel: 70, payments: 210, precautions: 'Avoid cold drinks' },
    { id: 44, name: 'Shweta Thakur', guardian: 'Raj Thakur', nurse: 'Nurse AR', reason: 'Ovarian Cysts', 
      medications: ['Pain relief'], dosage: ['500mg'], frequency: ['As needed'], 
      dripLevel: 50, payments: 220, precautions: 'Follow-up check-up' },
    { id: 45, name: 'Nitin Desai', guardian: 'Kajal Desai', nurse: 'Nurse AS', reason: 'Kidney Infection', 
      medications: ['Antibiotic'], dosage: ['500mg'], frequency: ['Every 8 hours'], 
      dripLevel: 40, payments: 300, precautions: 'Stay hydrated' },
    { id: 46, name: 'Aarti Iyer', guardian: 'Surya Iyer', nurse: 'Nurse AT', reason: 'Gingivitis', 
      medications: ['Antibiotic'], dosage: ['500mg'], frequency: ['Twice daily'], 
      dripLevel: 50, payments: 180, precautions: 'Maintain oral hygiene' },
    { id: 47, name: 'Sumit Sharma', guardian: 'Geeta Sharma', nurse: 'Nurse AU', reason: 'Panic Attack', 
      medications: ['Anti-anxiety'], dosage: ['1mg'], frequency: ['As needed'], 
      dripLevel: 30, payments: 200, precautions: 'Relaxation techniques' },
    { id: 48, name: 'Karan Yadav', guardian: 'Rita Yadav', nurse: 'Nurse AV', reason: 'Sinus Infection', 
      medications: ['Antibiotic'], dosage: ['500mg'], frequency: ['Every 8 hours'], 
      dripLevel: 70, payments: 210, precautions: 'Avoid allergens' },
    { id: 49, name: 'Maya Rao', guardian: 'Ajay Rao', nurse: 'Nurse AW', reason: 'Urinary Tract Infection', 
      medications: ['Antibiotic'], dosage: ['500mg'], frequency: ['Every 6 hours'], 
      dripLevel: 60, payments: 240, precautions: 'Stay hydrated' },
    { id: 50, name: 'Raghav Singh', guardian: 'Seema Singh', nurse: 'Nurse AX', reason: 'Vertigo', 
      medications: ['Antihistamine'], dosage: ['10mg'], frequency: ['As needed'], 
      dripLevel: 50, payments: 250, precautions: 'Avoid sudden movements' }
];

function displayPatients() {
    const patientList = document.getElementById('patient-list');
    patientList.innerHTML = ''; // Clear previous results

    patients.forEach((patient, index) => {
        const patientCard = document.createElement('div');
        patientCard.classList.add('patient-card');

        patientCard.innerHTML = `
            <h3>${patient.name}</h3>
            <p>Age: ${patient.age}</p>
            <p>Status: ${patient.status}</p>
            <p>Medication: ${patient.medication}</p>
            <p>Guardian: ${patient.guardian}</p>
            <p>Nurse: ${patient.nurse}</p>
            <p>Payment Status: ${patient.paymentStatus}</p>
            <button onclick="payPatient(${index})">Pay</button>
            <button onclick="viewMedicationHistory(${index})">View Medication History</button>
        `;

        patientList.appendChild(patientCard);
    });
}

function payPatient(index) {
    const patient = patients[index];
    const patientName = patient.name;

    // Redirect to Payment page with the patient's name
    window.location.href = `Payment.html?patient=${encodeURIComponent(patientName)}`;
}

function viewMedicationHistory(index) {
    const patient = patients[index];
    const medicationHistory = patient.medicationHistory || [];

    let historyMessage = `Medication History for ${patient.name}:\n`;
    medicationHistory.forEach((med, idx) => {
        historyMessage += `${idx + 1}. ${med}\n`;
    });

    alert(historyMessage);
}

function addPatient(name, age, status, medication, guardian, nurse) {
    const newPatient = {
        name,
        age,
        status,
        medication,
        guardian,
        nurse,
        paymentStatus: "Pending", // Default payment status
        medicationHistory: [] // Initial empty medication history
    };
    
    patients.push(newPatient);
    displayPatients();
}

// Example: Add new patient dynamically (You can replace this with a form submission)
addPatient("John Doe", 30, "Under Treatment", "Medication A", "Jane Doe", "Nurse Smith");

document.getElementById('search-input').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const filteredPatients = patients.filter(patient => 
        patient.name.toLowerCase().includes(searchValue)
    );
    displayFilteredPatients(filteredPatients);
});

function displayFilteredPatients(filteredPatients) {
    const patientList = document.getElementById('patient-list');
    patientList.innerHTML = ''; // Clear previous results

    filteredPatients.forEach((patient, index) => {
        const patientCard = document.createElement('div');
        patientCard.classList.add('patient-card');

        patientCard.innerHTML = `
            <h3>${patient.name}</h3>
            <p>Age: ${patient.age}</p>
            <p>Status: ${patient.status}</p>
            <p>Medication: ${patient.medication}</p>
            <p>Guardian: ${patient.guardian}</p>
            <p>Nurse: ${patient.nurse}</p>
            <p>Payment Status: ${patient.paymentStatus}</p>
            <button onclick="payPatient(${index})">Pay</button>
            <button onclick="viewMedicationHistory(${index})">View Medication History</button>
        `;

        patientList.appendChild(patientCard);
    });
}

// Call displayPatients initially to show the list
displayPatients();
