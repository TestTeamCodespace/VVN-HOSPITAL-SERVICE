let patients = [
    {
        id: 1,
        name: 'Rahul Sharma',
        guardian: 'Amit Sharma',
        nurse: 'Nurse A',
        reason: 'Surgery',
        medications: [],
        dripLevel: 100,
        payments: 500,
        precautions: 'Rest and hydration',
        receipt: 'REC-001',
        medicationHistory: []
    },
    {
        id: 2,
        name: 'Priya Gupta',
        guardian: 'Sita Gupta',
        nurse: 'Nurse B',
        reason: 'Fever',
        medications: [],
        dripLevel: 95,
        payments: 300,
        precautions: 'Stay hydrated',
        receipt: 'REC-002',
        medicationHistory: []
    },
    // Additional patient data...
    {
        id: 3,
        name: 'Suresh Verma',
        guardian: 'Rajesh Verma',
        nurse: 'Nurse C',
        reason: 'Checkup',
        medications: [],
        dripLevel: 100,
        payments: 1000,
        precautions: 'Regular exercise',
        receipt: 'REC-003',
        medicationHistory: []
    }
    // More patients can be added here...
];

document.getElementById('searchForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const filteredPatients = patients.filter(patient => 
        patient.name.toLowerCase().includes(searchQuery)
    );
    displayPatients(filteredPatients);
});

function displayPatients(filteredPatients) {
    const patientCards = document.getElementById('patientCards');
    patientCards.innerHTML = '';
    filteredPatients.forEach(patient => {
        const card = document.createElement('div');
        card.classList.add('patient-card');
        card.innerHTML = `
            <h3>${patient.name}</h3>
            <p>Guardian: ${patient.guardian}</p>
            <p>Nurse: ${patient.nurse}</p>
            <p>Reason: ${patient.reason}</p>
            <p>Drip Level: ${patient.dripLevel}%</p>
            <button onclick="viewPatientDetails(${patient.id})">View Details</button>
        `;
        patientCards.appendChild(card);
    });
}

function viewPatientDetails(id) {
    const patient = patients.find(p => p.id === id);
    if (patient) {
        alert(`Name: ${patient.name}\nGuardian: ${patient.guardian}\nNurse: ${patient.nurse}\nReason: ${patient.reason}\nDrip Level: ${patient.dripLevel}%\nPayments: ${patient.payments}\nPrecautions: ${patient.precautions}`);
    }
}

// Function to handle patient addition
document.getElementById('addPatientForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const newPatient = {
        id: patients.length + 1,
        name: document.getElementById('name').value,
        guardian: document.getElementById('guardian').value,
        nurse: document.getElementById('nurse').value,
        reason: document.getElementById('reason').value,
        medications: [],
        dripLevel: 100,
        payments: 0,
        precautions: '',
        receipt: `REC-00${patients.length + 1}`,
        medicationHistory: []
    };
    
    patients.push(newPatient); // Add new patient to the array
    alert(`${newPatient.name} added successfully!`);
    window.location.href = 'index.html'; // Redirect back to the main page
});

// Handle login
const correctUsername = 'user';
const correctPassword = 'password';

document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === correctUsername && password === correctPassword) {
        window.location.href = 'index.html'; // Redirect to main page
    } else {
        document.getElementById('loginError').innerText = 'Invalid credentials';
    }
});

// Monitor drip levels
function monitorDripLevels() {
    patients.forEach(patient => {
        if (patient.dripLevel <= 15) {
            patient.dripLevel = 100; // Reset drip level
            alert(`Drip level for ${patient.name} reset to 100%`);
            // Update the display if necessary
        }
    });
}

// Call this function periodically (e.g., every hour)
setInterval(monitorDripLevels, 3600000);
