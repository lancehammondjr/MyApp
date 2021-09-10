'use strict'

let MyLibrary
if (typeof document !== 'undefined') {
  MyLibrary = require('my-library').default
}

//let lcraDepartment = ["Business Development", "Chief Administrative Officer", "Chief Commercial Officer", "Chief Financial Officer", "Chief of Staff", "Commercial Asset Management", "Communications", "Community Services", "Construction I", "Construction II", "Construction Support", "Controller", "Corporate Events", "Corporate Strategy", "Critical Infra Protection", "Critical Infrastructure Protection", "Customer Operations", "Cybersecurity", "Dam and Hydro", "Digital Services", "Enterprise Operations", "Environmental Affairs", "Environmental Field Services", "Environmental Lab", "Facilities Planning Management", "Finance", "Financial Planning & Strategy", "Fleet Services", "FPP Maintenance", "FPP Operations", "FPP Plant Support", "FRG Maintenance", "FRG Operations", "FRG Plant Support", "Fuels Accounting", "General Counsel", "General Manager", "Generation Environmental Group", "Generation Operations Mgmt", "Governmental & Regional Affairs", "Hilbig Gas Operations", "Human Resources", "Information Management", "Irrigation Operations", "Lands & Conservation", "Legal Services", "Line & Structural Engineering", "Line Operations", "LPPP Maintenance", "LPPP Operations", "LPPP Plant Support", "Materials Management", "Mid-Office Credit and Risk", "P&G Oper Reliability Group", "Parks", "Parks District - Coastal", "Parks District - East", "Parks District - West", "Plant Operations Engr. Group", "Plant Support Service", "Project Management", "Public Affairs", "QSE Operations", "Rail Fleet Operations", "Rangers", "Real Estate Services", "Regulatory & Market Compliance", "Regulatory Affairs", "Resilience", "River Operations", "Safety Services", "Sandy Creek Energy Station", "Security", "Service Quality & Planning", "SOCC Operations", "Strategic Initiatives & Transformation", "Strategic Sourcing", "Substation Engineering", "Substation Operations", "Supply Chain", "Survey GIS & Technical Svc", "System Control Services", "System Infrastructure", "Technical & Engineering Services", "Telecom Engineering", "Trans Contract Construction", "Trans Operational Intelligence", "Transmission Design & Protect", "Transmission Executive Mgmt", "Transmission Field Services", "Transmission Planning", "Transmission Protection", "Transmission Strategic Svcs", "Water", "Water Contracts & Conservation", "Water Engineering", "Water Quality", "Water Resource Management", "Water Surface Management", "Wholesale Markets & Sup"];

//console.log(lcraDepartment[3])

//let lcraBuilding = ["Admin Building", "Arbuckle Reservoir", "Auxiliary Building", "Bastrop", "Bay City", "Black Rock Park", "Boerne Substation", "Buchanan Dam", "Buchanan Dam HOCC", "Building A", "Building B", "Building C", "Building D", "Building E", "Building F", "Building G", "Building H", "Building S", "Building T", "Comal Substation", "Communication Building", "D151L", "D152", "Eagle Lake", "EMF", "Environmental Office (2nd Flr U3)", "EnvLab", "Fergusen", "Ferguson", "FPP", "FPP Stores", "Garwood", "GCWD", "Gillespie Substation", "Hancock", "Hilbig", "HOCC", "I&C Shop", "Lakeside Water Division", "Lane City", "LANE CITY / Arbuckle", "Llano Substation", "Long", "Lost Pines", "LP1 Admin Building", "LP1 Control Room", "LSWD", "Maintenance Building", "Maintenance Shop", "Mansfield Annex", "Mansfield Dam", "Matagorda Bay", "MCKR Visitor Center", "Miller", "Miller", "Miller Dam", "Morgan Building", "North Shore Park", "PET Lab", "Production Control Room", "Redbud", "San Angelo", "San Saba", "Scrubber Building", "Service Building", "SGP Admin Building", "SGP Control Room", "Shapiro", "Shop Building", "Smithville", "SOCC", "South Shore Park", "Steel Shop", "TOCC", "U1&2 Training Area", "U1/2 Water Lab", "Unit 3 (1st Floor)", "Vehicle Maintenance Building", "Water Lab", "Wirtz Dam", "WMF", "Work Truck"];

//console.log(lcraBuilding[5])

//let lcraDepart = document.getElementsByTagName("select");
//let lcraBuild = document.getElementsByClassName("lcraBuild");

function whichDepart() {

    let lcraDepartment = ["Business Development", "Chief Administrative Officer", "Chief Commercial Officer", "Chief Financial Officer", "Chief of Staff", "Commercial Asset Management", "Communications", "Community Services", "Construction I", "Construction II", "Construction Support", "Controller", "Corporate Events", "Corporate Strategy", "Critical Infra Protection", "Critical Infrastructure Protection", "Customer Operations", "Cybersecurity", "Dam and Hydro", "Digital Services", "Enterprise Operations", "Environmental Affairs", "Environmental Field Services", "Environmental Lab", "Facilities Planning Management", "Finance", "Financial Planning & Strategy", "Fleet Services", "FPP Maintenance", "FPP Operations", "FPP Plant Support", "FRG Maintenance", "FRG Operations", "FRG Plant Support", "Fuels Accounting", "General Counsel", "General Manager", "Generation Environmental Group", "Generation Operations Mgmt", "Governmental & Regional Affairs", "Hilbig Gas Operations", "Human Resources", "Information Management", "Irrigation Operations", "Lands & Conservation", "Legal Services", "Line & Structural Engineering", "Line Operations", "LPPP Maintenance", "LPPP Operations", "LPPP Plant Support", "Materials Management", "Mid-Office Credit and Risk", "P&G Oper Reliability Group", "Parks", "Parks District - Coastal", "Parks District - East", "Parks District - West", "Plant Operations Engr. Group", "Plant Support Service", "Project Management", "Public Affairs", "QSE Operations", "Rail Fleet Operations", "Rangers", "Real Estate Services", "Regulatory & Market Compliance", "Regulatory Affairs", "Resilience", "River Operations", "Safety Services", "Sandy Creek Energy Station", "Security", "Service Quality & Planning", "SOCC Operations", "Strategic Initiatives & Transformation", "Strategic Sourcing", "Substation Engineering", "Substation Operations", "Supply Chain", "Survey GIS & Technical Svc", "System Control Services", "System Infrastructure", "Technical & Engineering Services", "Telecom Engineering", "Trans Contract Construction", "Trans Operational Intelligence", "Transmission Design & Protect", "Transmission Executive Mgmt", "Transmission Field Services", "Transmission Planning", "Transmission Protection", "Transmission Strategic Svcs", "Water", "Water Contracts & Conservation", "Water Engineering", "Water Quality", "Water Resource Management", "Water Surface Management", "Wholesale Markets & Sup"];

    //let lcraDepart = document.getElementById("lcraDepart");


     for(let i = 0; i < lcraDepartment.length; i++){
        let optn = lcraDepartment[i];
        let el = document.createElement("option");
        el.value = optn;
        el.textContent = optn;
        lcraDepart.appendChild(el);
    }
}


function whichBuild() {

    let lcraBuilding = ["Admin Building", "Arbuckle Reservoir", "Auxiliary Building", "Bastrop", "Bay City", "Black Rock Park", "Boerne Substation", "Buchanan Dam", "Buchanan Dam HOCC", "Building A", "Building B", "Building C", "Building D", "Building E", "Building F", "Building G", "Building H", "Building S", "Building T", "Comal Substation", "Communication Building", "D151L", "D152", "Eagle Lake", "EMF", "Environmental Office (2nd Flr U3)", "EnvLab", "Fergusen", "Ferguson", "FPP", "FPP Stores", "Garwood", "GCWD", "Gillespie Substation", "Hancock", "Hilbig", "HOCC", "I&C Shop", "Lakeside Water Division", "Lane City", "LANE CITY / Arbuckle", "Llano Substation", "Long", "Lost Pines", "LP1 Admin Building", "LP1 Control Room", "LSWD", "Maintenance Building", "Maintenance Shop", "Mansfield Annex", "Mansfield Dam", "Matagorda Bay", "MCKR Visitor Center", "Miller", "Miller", "Miller Dam", "Morgan Building", "North Shore Park", "PET Lab", "Production Control Room", "Redbud", "San Angelo", "San Saba", "Scrubber Building", "Service Building", "SGP Admin Building", "SGP Control Room", "Shapiro", "Shop Building", "Smithville", "SOCC", "South Shore Park", "Steel Shop", "TOCC", "U1&2 Training Area", "U1/2 Water Lab", "Unit 3 (1st Floor)", "Vehicle Maintenance Building", "Water Lab", "Wirtz Dam", "WMF", "Work Truck"];

    //let lcraBuild = document.getElementById("lcraBuild");


     for(let i = 0; i < lcraBuilding.length; i++){
        let optn = lcraBuilding[i];
        let el = document.createElement("option");
        el.textContent = optn;
        el.value = optn;
        lcraBuild.appendChild(el);
    }
}
function resetForm() {
    document.getElementById("myForm").reset();
}
function countChars(obj){
    document.getElementById("current").innerHTML = obj.value.length;
}

function saveFile() {

    // Get the data from each element on the form.
    const deviceName = document.getElementById('dname');
    const nicAddress = document.getElementById('mname');
    const department = document.getElementById('lcraDepart');
    const building = document.getElementById('lcraBuild');
    const officeNumber = document.getElementById('officeNum');
    const sharedDevice = document.getElementById('sharedDev');
    const inStorage = document.getElementById('inStor');
    const decommissioned = document.getElementById('decomm');
    const comments = document.getElementById('commentBox')


    // Function to check if there is a value in Device Name and NIC Address
    function formRequirements() {
        if (deviceName.value === '' && nicAddress.value !== '') {
            alert ("Please enter Device Name.")
        }
        else if (nicAddress.value === '' && deviceName.value !== '') {
            alert ("Please enter NIC Address.")
        }
        else if (deviceName.value === '' && nicAddress.value === '') {
            alert ("Please enter Device Name & NIC Address.")
        }

        // Function to check letters and numbers
        function alphanumeric() { 
            let letters = /^[0-9a-zA-Z]+$/;
    
            if (nicAddress.value.match(letters)) {
            return true;
            }
            else {
            alert ('Please input alphanumeric characters only');
            return false;
            }
        }
        alphanumeric();
    } 

    formRequirements();

    // This variable stores all the data.
    /*let data =
        'Device Name = ' + deviceName.value + ' \r\n' + 
        'Network - NIC Address = ' + nicAddress.value + ' \r\n' + 
        'Custom Data - Forms - Asset Location - Department = ' + department.value + ' \r\n' + 
        'Custom Data - Forms - Asset Location - Building = ' + building.value + ' \r\n' + 
        'Custom Data - Forms - Asset Location - Office Number = ' + officeNumber.value + ' \r\n' +
        'Custom Data - Forms - Asset Location - Shared Device = ' + sharedDevice.value + ' \r\n' + 
        'Custom Data - Forms - Asset Location - In Storage =  ' + inStorage.value + ' \r\n' +
        'Custom Data - Forms - Asset Location - Decom = ' + decommissioned.value + ' \r\n' +
        'Custom Data - Forms - Asset Location - Comments = ' + comments.value;*/
    //console.log(department.value)
    if (deviceName.value !== '' && nicAddress.value !== '') {

        let data;
            if (department.value === '' && building.value !== '' && officeNumber.value !== '' && comments.value !== '') {
                console.log(1)
                data = 
                'Device Name = ' + deviceName.value + ' \r\n' +
                'Network - NIC Address = ' + nicAddress.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Building = ' + building.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Office Number = ' + officeNumber.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Shared Device = ' + sharedDevice.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - In Storage =  ' + inStorage.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Decom = ' + decommissioned.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Comments = ' + comments.value;
            }
            else if (building.value === '' && department.value !== '' && officeNumber.value !== '' && comments.value !== '') {
                console.log(2)
                data = 
                'Device Name = ' + deviceName.value + ' \r\n' +
                'Network - NIC Address = ' + nicAddress.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Department = ' + department.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Office Number = ' + officeNumber.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Shared Device = ' + sharedDevice.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - In Storage =  ' + inStorage.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Decom = ' + decommissioned.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Comments = ' + comments.value;
            }
            else if (officeNumber.value === '' && department.value !== '' && building.value !== '' && comments.value !== '') {
                console.log(3)
                data =
                'Device Name = ' + deviceName.value + ' \r\n' + 
                'Network - NIC Address = ' + nicAddress.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Department = ' + department.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Building = ' + building.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Shared Device = ' + sharedDevice.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - In Storage =  ' + inStorage.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Decom = ' + decommissioned.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Comments = ' + comments.value;
            }
            else if (comments.value === '' && department.value !== '' && building.value !== '' && officeNumber.value !== '') {
                console.log(4)
                data =
                'Device Name = ' + deviceName.value + ' \r\n' +
                'Network - NIC Address = ' + nicAddress.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Department = ' + department.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Building = ' + building.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Office Number = ' + officeNumber.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Shared Device = ' + sharedDevice.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - In Storage =  ' + inStorage.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Decom = ' + decommissioned.value;
            }

            else if (department.value === '' && building.value === '' && officeNumber.value !== '' && comments.value !== '') {
                console.log(5)
                data =
                'Device Name = ' + deviceName.value + ' \r\n' +
                'Network - NIC Address = ' + nicAddress.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Office Number = ' + officeNumber.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Shared Device = ' + sharedDevice.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - In Storage =  ' + inStorage.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Decom = ' + decommissioned.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Comments = ' + comments.value;
            }

            else if (department.value === '' && officeNumber.value === '' && building.value !== '' && comments.value !== '') {
                console.log(6)
                data =
                'Device Name = ' + deviceName.value + ' \r\n' +
                'Network - NIC Address = ' + nicAddress.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Building = ' + building.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Shared Device = ' + sharedDevice.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - In Storage =  ' + inStorage.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Decom = ' + decommissioned.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Comments = ' + comments.value;
            }

            else if (building.value === '' && officeNumber.value === '' && department.value !== '' && comments.value !== '') {
                console.log(7)
                data =
                'Device Name = ' + deviceName.value + ' \r\n' +
                'Network - NIC Address = ' + nicAddress.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Department = ' + department.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Shared Device = ' + sharedDevice.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - In Storage =  ' + inStorage.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Decom = ' + decommissioned.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Comments = ' + comments.value;
            }
            else if (department.value === '' && building.value === '' && officeNumber.value === '' && comments.value !== '') {
                console.log(8)
                data =
                'Device Name = ' + deviceName.value + ' \r\n' +
                'Network - NIC Address = ' + nicAddress.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Shared Device = ' + sharedDevice.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - In Storage =  ' + inStorage.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Decom = ' + decommissioned.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Comments = ' + comments.value;
            }
            else if (department.value !== '' && officeNumber.value === '' && building.value !== '' && comments.value === '') {
                console.log(9)
                data =
                'Device Name = ' + deviceName.value + ' \r\n' +
                'Network - NIC Address = ' + nicAddress.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Department = ' + department.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Building = ' + building.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Shared Device = ' + sharedDevice.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - In Storage =  ' + inStorage.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Decom = ' + decommissioned.value;
                
            }

            else if (department.value === '' && officeNumber.value !== '' && building.value !== '' && comments.value === '') {
                console.log(10)
                data =
                'Device Name = ' + deviceName.value + ' \r\n' +
                'Network - NIC Address = ' + nicAddress.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Building = ' + building.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Office Number = ' + officeNumber.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Shared Device = ' + sharedDevice.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - In Storage =  ' + inStorage.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Decom = ' + decommissioned.value;
                
            }
            else if (department.value !== '' && officeNumber.value !== '' && building.value === '' && comments.value === '') {
                console.log(11)
                data =
                'Device Name = ' + deviceName.value + ' \r\n' +
                'Network - NIC Address = ' + nicAddress.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Department = ' + department.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Office Number = ' + officeNumber.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Shared Device = ' + sharedDevice.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - In Storage =  ' + inStorage.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Decom = ' + decommissioned.value;
                

            }
            else if (department.value !== '' && officeNumber.value === '' && building.value === '' && comments.value === '') {
                console.log(12)
                data =
                'Device Name = ' + deviceName.value + ' \r\n' +
                'Network - NIC Address = ' + nicAddress.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Department = ' + department.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Shared Device = ' + sharedDevice.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - In Storage =  ' + inStorage.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Decom = ' + decommissioned.value;
               
            }
            else if (department.value === '' && officeNumber.value === '' && building.value !== '' && comments.value === '') {
                console.log(13)
                data =
                'Device Name = ' + deviceName.value + ' \r\n' +
                'Network - NIC Address = ' + nicAddress.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Building = ' + building.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Shared Device = ' + sharedDevice.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - In Storage =  ' + inStorage.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Decom = ' + decommissioned.value;
                
            }
            else if (department.value === '' && officeNumber.value !== '' && building.value === '' && comments.value === '') {
                console.log(14)
                data =
                'Device Name = ' + deviceName.value + ' \r\n' +
                'Network - NIC Address = ' + nicAddress.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Office Number = ' + officeNumber.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Shared Device = ' + sharedDevice.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - In Storage =  ' + inStorage.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Decom = ' + decommissioned.value;
                
            }
            else if (department.value === '' && officeNumber.value === '' && building.value === '' && comments.value === '') {
                console.log(15)
                data =
                'Device Name = ' + deviceName.value + ' \r\n' +
                'Network - NIC Address = ' + nicAddress.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Shared Device = ' + sharedDevice.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - In Storage =  ' + inStorage.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Decom = ' + decommissioned.value;
            }
            else if (department.value !== '' && building.value !== '' && officeNumber.value !== '' && comments.value !== ''){
                console.log(16)
                data =
                'Device Name = ' + deviceName.value + ' \r\n' +
                'Network - NIC Address = ' + nicAddress.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Department = ' + department.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Building = ' + building.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Office Number = ' + officeNumber.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Shared Device = ' + sharedDevice.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - In Storage =  ' + inStorage.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Decom = ' + decommissioned.value + ' \r\n' +
                'Custom Data - Forms - Asset Location - Comments = ' + comments.value;
            }

        // Convert the text to BLOB.
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'formData.ims';

        // The file to save the data.
        let newLink = document.createElement("a");
        newLink.download = (`${deviceName.value}.ims`);

        if (window.webkitURL != null) {
                newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click();
    }
    resetForm();
}