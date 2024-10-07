const patients = [
    { id: 1, name: 'Rahul Sharma', guardian: 'Amit Sharma', nurse: 'Nurse A', reason: 'Surgery', medications: ['Paracetamol', 'Amoxicillin'], dripLevel: 100, payments: 500, precautions: 'Rest and hydration' },
    { id: 2, name: 'Priya Gupta', guardian: 'Sita Gupta', nurse: 'Nurse B', reason: 'Fever', medications: ['Paracetamol', 'Cetirizine'], dripLevel: 95, payments: 300, precautions: 'Stay hydrated' },
    { id: 3, name: 'Aarav Mehta', guardian: 'Raj Mehta', nurse: 'Nurse C', reason: 'Checkup', medications: ['Vitamin C'], dripLevel: 80, payments: 150, precautions: 'Balanced diet' },
    { id: 4, name: 'Nisha Verma', guardian: 'Kiran Verma', nurse: 'Nurse D', reason: 'Headache', medications: ['Ibuprofen'], dripLevel: 90, payments: 200, precautions: 'Rest well' },
    { id: 5, name: 'Vikram Singh', guardian: 'Anita Singh', nurse: 'Nurse E', reason: 'Injury', medications: ['Pain Reliever'], dripLevel: 70, payments: 300, precautions: 'Avoid movement' },
    { id: 6, name: 'Sita Sharma', guardian: 'Ravi Sharma', nurse: 'Nurse F', reason: 'Fever', medications: ['Paracetamol'], dripLevel: 85, payments: 100, precautions: 'Drink fluids' },
    { id: 7, name: 'Arjun Joshi', guardian: 'Neeta Joshi', nurse: 'Nurse G', reason: 'Allergy', medications: ['Antihistamine'], dripLevel: 60, payments: 250, precautions: 'Avoid allergens' },
    { id: 8, name: 'Kajal Kumar', guardian: 'Amit Kumar', nurse: 'Nurse H', reason: 'Cold', medications: ['Cold Medicine'], dripLevel: 90, payments: 120, precautions: 'Stay warm' },
    { id: 9, name: 'Ravi Patil', guardian: 'Lata Patil', nurse: 'Nurse I', reason: 'Fatigue', medications: ['Multivitamin'], dripLevel: 75, payments: 200, precautions: 'Rest adequately' },
    { id: 10, name: 'Ananya Roy', guardian: 'Deepak Roy', nurse: 'Nurse J', reason: 'Checkup', medications: ['Blood Pressure Medication'], dripLevel: 100, payments: 500, precautions: 'Regular monitoring' },
    { id: 11, name: 'Aarohi Jain', guardian: 'Pankaj Jain', nurse: 'Nurse K', reason: 'Flu', medications: ['Flu Shot'], dripLevel: 95, payments: 400, precautions: 'Stay isolated' },
    { id: 12, name: 'Rohit Verma', guardian: 'Priyanka Verma', nurse: 'Nurse L', reason: 'Surgery', medications: ['Painkillers'], dripLevel: 85, payments: 600, precautions: 'Avoid physical activity' },
    { id: 13, name: 'Meera Nair', guardian: 'Suresh Nair', nurse: 'Nurse M', reason: 'Checkup', medications: ['Calcium'], dripLevel: 70, payments: 200, precautions: 'Take supplements' },
    { id: 14, name: 'Deepak Kumar', guardian: 'Anjali Kumar', nurse: 'Nurse N', reason: 'Back Pain', medications: ['Muscle Relaxants'], dripLevel: 80, payments: 300, precautions: 'Use heat pads' },
    { id: 15, name: 'Pooja Das', guardian: 'Sanjay Das', nurse: 'Nurse O', reason: 'Anxiety', medications: ['Anti-Anxiety Medication'], dripLevel: 90, payments: 250, precautions: 'Stay calm' },
    { id: 16, name: 'Arnav Sharma', guardian: 'Meena Sharma', nurse: 'Nurse P', reason: 'Infection', medications: ['Antibiotics'], dripLevel: 60, payments: 350, precautions: 'Follow doctors advice' },
    { id: 17, name: 'Sonal Gupta', guardian: 'Ravi Gupta', nurse: 'Nurse Q', reason: 'Checkup', medications: ['Cholesterol Medication'], dripLevel: 100, payments: 400, precautions: 'Diet control' },
    { id: 18, name: 'Rajesh Yadav', guardian: 'Sita Yadav', nurse: 'Nurse R', reason: 'Diabetes', medications: ['Insulin'], dripLevel: 85, payments: 300, precautions: 'Regular testing' },
    { id: 19, name: 'Tanvi Mehta', guardian: 'Nikhil Mehta', nurse: 'Nurse S', reason: 'Fever', medications: ['Fever Reducer'], dripLevel: 90, payments: 150, precautions: 'Stay hydrated' },
    { id: 20, name: 'Rishabh Singh', guardian: 'Anita Singh', nurse: 'Nurse T', reason: 'Checkup', medications: ['Blood Thinner'], dripLevel: 100, payments: 500, precautions: 'Regular checkups' },
    { id: 21, name: 'Neha Joshi', guardian: 'Ajay Joshi', nurse: 'Nurse U', reason: 'Cold', medications: ['Decongestant'], dripLevel: 75, payments: 250, precautions: 'Rest well' },
    { id: 22, name: 'Vishal Sharma', guardian: 'Suman Sharma', nurse: 'Nurse V', reason: 'Allergy', medications: ['Corticosteroid'], dripLevel: 80, payments: 300, precautions: 'Avoid allergens' },
    { id: 23, name: 'Akanksha Nair', guardian: 'Harish Nair', nurse: 'Nurse W', reason: 'Surgery', medications: ['Anesthesia'], dripLevel: 90, payments: 400, precautions: 'Post-op care' },
    { id: 24, name: 'Karan Kapoor', guardian: 'Poonam Kapoor', nurse: 'Nurse X', reason: 'Checkup', medications: ['Electrolytes'], dripLevel: 70, payments: 200, precautions: 'Hydrate well' },
    { id: 25, name: 'Sneha Agarwal', guardian: 'Rajesh Agarwal', nurse: 'Nurse Y', reason: 'Fever', medications: ['Antipyretic'], dripLevel: 95, payments: 150, precautions: 'Stay warm' },
    { id: 26, name: 'Riya Singh', guardian: 'Kunal Singh', nurse: 'Nurse Z', reason: 'Diabetes', medications: ['Metformin'], dripLevel: 80, payments: 250, precautions: 'Monitor levels' },
    { id: 27, name: 'Shivam Patel', guardian: 'Nisha Patel', nurse: 'Nurse AA', reason: 'Checkup', medications: ['Antibiotics'], dripLevel: 100, payments: 400, precautions: 'Follow medication schedule' },
    { id: 28, name: 'Sakshi Kumar', guardian: 'Amit Kumar', nurse: 'Nurse BB', reason: 'Headache', medications: ['Aspirin'], dripLevel: 90, payments: 300, precautions: 'Limit screen time' },
    { id: 29, name: 'Pranav Rathi', guardian: 'Nirmala Rathi', nurse: 'Nurse CC', reason: 'Injury', medications: ['Pain Relief'], dripLevel: 75, payments: 200, precautions: 'Physical therapy' },
    { id: 30, name: 'Aditi Jain', guardian: 'Rajesh Jain', nurse: 'Nurse DD', reason: 'Cold', medications: ['Cough Syrup'], dripLevel: 60, payments: 150, precautions: 'Stay warm' },
    { id: 31, name: 'Varun Singh', guardian: 'Pooja Singh', nurse: 'Nurse EE', reason: 'Surgery', medications: ['Painkillers'], dripLevel: 100, payments: 500, precautions: 'Rest and recovery' },
    { id: 32, name: 'Priti Verma', guardian: 'Amit Verma', nurse: 'Nurse FF', reason: 'Anxiety', medications: ['Anti-Anxiety'], dripLevel: 85, payments: 300, precautions: 'Relaxation techniques' },
    { id: 33, name: 'Rahul Yadav', guardian: 'Sita Yadav', nurse: 'Nurse GG', reason: 'Checkup', medications: ['Cholesterol'], dripLevel: 90, payments: 150, precautions: 'Healthy diet' },
    { id: 34, name: 'Riya Das', guardian: 'Rajesh Das', nurse: 'Nurse HH', reason: 'Fever', medications: ['Antipyretic'], dripLevel: 100, payments: 400, precautions: 'Stay hydrated' },
    { id: 35, name: 'Kartik Sharma', guardian: 'Anita Sharma', nurse: 'Nurse II', reason: 'Injury', medications: ['Pain Management'], dripLevel: 75, payments: 250, precautions: 'Limit movement' },
    { id: 36, name: 'Siddharth Gupta', guardian: 'Nisha Gupta', nurse: 'Nurse JJ', reason: 'Headache', medications: ['Pain Reliever'], dripLevel: 80, payments: 300, precautions: 'Adequate rest' },
    { id: 37, name: 'Jaya Kumar', guardian: 'Ravi Kumar', nurse: 'Nurse KK', reason: 'Diabetes', medications: ['Insulin'], dripLevel: 90, payments: 500, precautions: 'Regular monitoring' },
    { id: 38, name: 'Dev Singh', guardian: 'Anita Singh', nurse: 'Nurse LL', reason: 'Checkup', medications: ['Blood Pressure'], dripLevel: 100, payments: 400, precautions: 'Check regularly' },
    { id: 39, name: 'Neelam Patil', guardian: 'Rajesh Patil', nurse: 'Nurse MM', reason: 'Cold', medications: ['Cough Syrup'], dripLevel: 70, payments: 150, precautions: 'Stay warm' },
    { id: 40, name: 'Rohan Nair', guardian: 'Suman Nair', nurse: 'Nurse NN', reason: 'Anxiety', medications: ['Antidepressants'], dripLevel: 85, payments: 300, precautions: 'Counseling' },
    { id: 41, name: 'Anaya Roy', guardian: 'Pankaj Roy', nurse: 'Nurse OO', reason: 'Fever', medications: ['Flu Medication'], dripLevel: 90, payments: 200, precautions: 'Rest' },
    { id: 42, name: 'Ishaan Agarwal', guardian: 'Nirmal Agarwal', nurse: 'Nurse PP', reason: 'Infection', medications: ['Antibiotics'], dripLevel: 100, payments: 500, precautions: 'Follow doctor\'s instructions' },
    { id: 43, name: 'Megha Joshi', guardian: 'Rajeev Joshi', nurse: 'Nurse QQ', reason: 'Surgery', medications: ['Pain Relief'], dripLevel: 95, payments: 400, precautions: 'Limit physical activity' },
    { id: 44, name: 'Sanjay Rathi', guardian: 'Kamini Rathi', nurse: 'Nurse RR', reason: 'Checkup', medications: ['Electrolytes'], dripLevel: 75, payments: 250, precautions: 'Stay hydrated' },
    { id: 45, name: 'Aditi Verma', guardian: 'Rakesh Verma', nurse: 'Nurse SS', reason: 'Cold', medications: ['Decongestant'], dripLevel: 80, payments: 300, precautions: 'Rest well' },
    { id: 46, name: 'Kabir Singh', guardian: 'Neeta Singh', nurse: 'Nurse TT', reason: 'Injury', medications: ['Pain Relief'], dripLevel: 60, payments: 150, precautions: 'Avoid strain' },
    { id: 47, name: 'Tanisha Patil', guardian: 'Anil Patil', nurse: 'Nurse UU', reason: 'Fever', medications: ['Fever Reducer'], dripLevel: 90, payments: 100, precautions: 'Stay hydrated' },
    { id: 48, name: 'Arnav Yadav', guardian: 'Geeta Yadav', nurse: 'Nurse VV', reason: 'Checkup', medications: ['Blood Pressure'], dripLevel: 100, payments: 500, precautions: 'Regular checkups' },
    { id: 49, name: 'Krishna Nair', guardian: 'Kamala Nair', nurse: 'Nurse WW', reason: 'Anxiety', medications: ['Anti-Anxiety Medication'], dripLevel: 85, payments: 200, precautions: 'Counseling' },
    { id: 50, name: 'Gaurav Jain', guardian: 'Aarti Jain', nurse: 'Nurse XX', reason: 'Surgery', medications: ['Painkillers'], dripLevel: 95, payments: 600, precautions: 'Follow up care' }
];
// Function to add a patient
function addPatient(event) {
    event.preventDefault();
    const name = document.getElementById('patient-name').value;
    const guardian = document.getElementById('guardian-name').value;
    const nurse = document.getElementById('nurse-name').value;
    const reason = document.getElementById('reason').value;
    
    const newPatient = {
        id: patients.length + 1,
        name,
        guardian,
        nurse,
        reason,
        medications: [],
        dripLevel: 100,
        payments: 0,
        precautions: '',
        receipt: '',
        medicationHistory: [],
    };
    
    patients.push(newPatient);
    alert('Patient added successfully!');
    document.getElementById('add-patient-form').reset(); // Reset the form
}

// Function to search patients based on the input
function searchPatients() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const patientList = document.getElementById('patient-list');
    patientList.innerHTML = ''; // Clear previous results

    const filteredPatients = patients.filter(patient => patient.name.toLowerCase().includes(input));

    filteredPatients.forEach(patient => {
        const card = document.createElement('div');
        card.className = 'patient-card';
        card.innerHTML = `
            <h3>${patient.name}</h3>
            <p>Guardian: ${patient.guardian}</p>
            <p>Nurse: ${patient.nurse}</p>
            <p>Reason: ${patient.reason}</p>
            <button onclick="viewPatient(${patient.id})">View Profile</button>
        `;
        patientList.appendChild(card);
    });
}

// Function to view patient profile
function viewPatient(id) {
    const patient = patients.find(p => p.id === id);
    if (patient) {
        document.getElementById('patient-name-header').innerText = `${patient.name}'s Profile`;
        
        const patientDetails = `
            <p><strong>Guardian:</strong> ${patient.guardian}</p>
            <p><strong>Nurse:</strong> ${patient.nurse}</p>
            <p><strong>Reason:</strong> ${patient.reason}</p>
            <p><strong>Drip Level:</strong> ${patient.dripLevel}%</p>
            <p><strong>Payments:</strong> ₹${patient.payments}</p>
            <p><strong>Precautions:</strong> ${patient.precautions}</p>
        `;
        document.getElementById('patient-details').innerHTML = patientDetails;
        
        // Initialize graphs
        drawGraphs(patient);
    }
}

// Function to draw graphs for medications and drip levels
function drawGraphs(patient) {
    const medicationLevels = patient.medications.map(med => med.level);
    const labels = patient.medications.map(med => med.name);
    
    // Medication Chart
    const medicationCtx = document.getElementById('medicationChart').getContext('2d');
    new Chart(medicationCtx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Medication Levels',
                data: medicationLevels,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Drip Chart
    const dripCtx = document.getElementById('dripChart').getContext('2d');
    new Chart(dripCtx, {
        type: 'line',
        data: {
            labels: ['Start', 'After 1 Hour', 'After 2 Hours', 'End'], // Sample labels
            datasets: [{
                label: 'Drip Level',
                data: [100, 80, 50, 0], // Sample data, adjust as necessary
                fill: false,
                borderColor: 'rgba(255, 99, 132, 1)',
                tension: 0.1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100 // Assuming max drip level is 100%
                }
            }
        }
    });
}

// Call searchPatients on input change
document.getElementById('search-input')?.addEventListener('input', searchPatients);
document.getElementById('add-patient-form')?.addEventListener('submit', addPatient);
