
interface startTrialData{
   icon : string,
    text : string;
    description : string;
}


const StartTrialData: startTrialData[] = [
    { icon: 'FaCalendarCheck', text: 'Shift scheduling', description: "Create, edit, and publish shifts." },
    { icon: 'Fa3', text: 'Employee profiles', description: "Add employees, assign roles, and set permissions." },
    { icon: 'FaClock', text: 'Time-off management', description: "Employees can request time off and see their balances." },
    { icon: 'FaMessage', text: 'Group messaging', description: "Send messages to your team or groups." },
    { icon: 'FaList', text: 'Payroll integrations', description: " Integrate with QuickBooks, ADP, Gusto, and more." },
  ];

export  default StartTrialData