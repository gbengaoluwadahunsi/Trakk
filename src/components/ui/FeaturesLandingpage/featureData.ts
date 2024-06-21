
interface CardData{
    image : string,
    text : string;
    description : string;
}


const featureData: CardData[] = [
    { image: '/schedule.webp', text: 'Easy scheduling', description: "Create schedules in minutes, not hours." },
    { image: '/customshifts.webp', text: 'Custom shifts' , description: "Set custom shifts for every employee." },
    { image: '/locationtracking.webp', text: 'Location tracking', description: "Track employees when they're on the clock."  },
    { image: '/timetracking.webp', text: 'Time tracking' , description: "Track employee hours and breaks." },
    { image: '/taskManangement.webp', text: 'Task management', description: "Assign tasks to employees and track their progress."  }
  ];

export  default featureData