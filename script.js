// Patient Data
const patients = [
    { id: 1, name: 'Rahul Sharma', guardian: 'Amit Sharma', nurse: 'Nurse A', reason: 'Surgery', medications: [{ name: 'Paracetamol', cost: 50 }], dripLevel: 100, payments: 500 },
    { id: 2, name: 'Priya Gupta', guardian: 'Sita Gupta', nurse: 'Nurse B', reason: 'Fever', medications: [{ name: 'Paracetamol', cost: 50 }], dripLevel: 95, payments: 300 },
    { id: 3, name: 'Suresh Verma', guardian: 'Rajesh Verma', nurse: 'Nurse C', reason: 'Checkup', medications: [], dripLevel: 100, payments: 1000 },
    { id: 4, name: 'Meera Iyer', guardian: 'Anil Iyer', nurse: 'Nurse D', reason: 'Surgery', medications: [{ name: 'Tramadol', cost: 80 }], dripLevel: 85, payments: 600 },
    { id: 5, name: 'Ravi Kumar', guardian: 'Pooja Kumar', nurse: 'Nurse E', reason: 'Allergy', medications: [{ name: 'Cetirizine', cost: 20 }], dripLevel: 100, payments: 450 },
    { id: 6, name: 'Anjali Rao', guardian: 'Krishna Rao', nurse: 'Nurse F', reason: 'Diabetes check', medications: [{ name: 'Metformin', cost: 100 }], dripLevel: 100, payments: 700 },
    { id: 7, name: 'Kiran Malhotra', guardian: 'Deepak Malhotra', nurse: 'Nurse G', reason: 'Routine Checkup', medications: [], dripLevel: 95, payments: 200 },
    { id: 8, name: 'Vinay Verma', guardian: 'Sonu Verma', nurse: 'Nurse H', reason: 'Heart Issues', medications: [{ name: 'Aspirin', cost: 60 }], dripLevel: 90, payments: 800 },
    { id: 9, name: 'Deepa Patil', guardian: 'Shiv Patil', nurse: 'Nurse I', reason: 'Pregnancy Check', medications: [], dripLevel: 100, payments: 300 },
    { id: 10, name: 'Rajendra Singh', guardian: 'Ramesh Singh', nurse: 'Nurse J', reason: 'Back Pain', medications: [{ name: 'Ibuprofen', cost: 70 }], dripLevel: 88, payments: 500 },
];

// Search Functionality
document.getElementById('search-button')?.addEventListener('click', () => {
    const input = document.getElementById('search-input').value.toLowerCase();
    const patientCards = document.getElementById('patient-cards');
    patientCards.innerHTML = '';
    patients.filter(patient => patient.name.toLowerCase().includes(input)).forEach(patient => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${patient.name}</h3>
            <p>Guardian: ${patient.guardian}</p>
            <p>Nurse: ${patient.nurse}</p>
            <p>Reason: ${patient.reason}</p>
            <p>Drip Level: ${patient.dripLevel}%</p>
            <p>Total Payments: ₹${patient.payments}</p>
        `;
        patientCards.appendChild(card);
    });
});

// Medication Management
document.getElementById('medication-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('patient-name').value;
    const medication = document.getElementById('medication-name').value;
    const cost = document.getElementById('medication-cost').value;
    
    const patient = patients.find(p => p.name.toLowerCase() === name.toLowerCase());
    if (patient) {
        patient.medications.push({ name: medication, cost: parseInt(cost) });
        displayMedications(patient);
    } else {
        alert('Patient not found!');
    }
    document.getElementById('medication-form').reset();
});

// Display Medications
function displayMedications(patient) {
    const medicationList = document.getElementById('medication-list');
    const item = document.createElement('div');
    item.classList.add('medication-item');
    item.innerHTML = `
        <h4>${patient.name}'s Medications:</h4>
        <ul>
            ${patient.medications.map(med => `<li>${med.name} - ₹${med.cost}</li>`).join('')}
        </ul>
    `;
    medicationList.appendChild(item);
}
