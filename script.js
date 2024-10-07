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

// Variables
const loginForm = document.getElementById('loginForm');
const patientSearchInput = document.getElementById('patientSearch');
const patientCardContainer = document.getElementById('patientCardContainer');
const addPatientButton = document.getElementById('addPatientButton');
const dashboardButton = document.getElementById('dashboardButton');
let isLoggedIn = false;

// Event Listeners
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    if (username === 'user' && password === 'password') {
        isLoggedIn = true;
        alert('Login successful');
        showDashboard();
    } else {
        alert('Invalid credentials');
    }
});

patientSearchInput.addEventListener('input', () => {
    const searchTerm = patientSearchInput.value.toLowerCase();
    searchPatients(searchTerm);
});

addPatientButton.addEventListener('click', () => {
    if (isLoggedIn) {
        window.location.href = 'addPatient.html'; // Redirect to Add Patient Page
    } else {
        alert('Please log in to add patients');
    }
});

// Functions
function showDashboard() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    displayPatients();
}

function searchPatients(term) {
    const filteredPatients = patients.filter(patient => patient.name.toLowerCase().includes(term));
    displayPatients(filteredPatients);
}

function displayPatients(patientsToDisplay = patients) {
    patientCardContainer.innerHTML = '';
    patientsToDisplay.forEach(patient => {
        const patientCard = document.createElement('div');
        patientCard.classList.add('patient-card');
        patientCard.innerHTML = `
            <h3>${patient.name}</h3>
            <p>Guardian: ${patient.guardian}</p>
            <p>Nurse: ${patient.nurse}</p>
            <p>Reason: ${patient.reason}</p>
            <p>Payments: $${patient.payments}</p>
            <p>Drip Level: ${patient.dripLevel}%</p>
            <canvas id="dripChart${patient.id}" class="drip-chart"></canvas>
        `;
        patientCardContainer.appendChild(patientCard);
        createDripChart(patient.id, patient.dripLevel);
    });
}

function createDripChart(patientId, dripLevel) {
    const ctx = document.getElementById(`dripChart${patientId}`).getContext('2d');
    new Chart(ctx, {
        type: 'gauge',
        data: {
            datasets: [{
                data: [dripLevel],
                backgroundColor: ['#4caf50', '#ff9800', '#f44336'],
                borderWidth: 0,
                needleValue: 0,
            }],
        },
        options: {
            responsive: true,
            elements: {
                arc: {
                    borderWidth: 0,
                },
            },
            circumference: Math.PI,
            rotation: Math.PI,
            needle: {
                length: '50%',
                width: 4,
                color: '#000',
            },
            plugins: {
                tooltip: {
                    enabled: true,
                },
            },
        },
    });
}

// Function to redirect to the Add Patient Page (implement logic as needed)
function redirectToAddPatient() {
    if (isLoggedIn) {
        window.location.href = 'addPatient.html';
    } else {
        alert('You must be logged in to add a patient');
    }
}
