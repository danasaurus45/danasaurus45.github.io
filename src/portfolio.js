const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: '#',
    title: 'Portofolio',
}

const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Dimas Ardana Pratama Putra',
    role: 'Final Year Student at State Polytechnic of Malang',
    description: '8th semester student at State Polytechnic of Malang, D4 Electronic Engineering study program with internship experience as a UI/UX Designer. Familiar with PHP, MySQL and Javascript in programming. Can use Arduino to make an electronic device.',
    social: {
        linkedin: 'https://www.linkedin.com/in/dimas-ardana-pratama-putra-65abb8213/',
        github: 'https://github.com/danasaurus45',
    },
}

const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
        name: 'IOT Smart Watering Device',
        description: 'This project is an IOT Device using ESP8266 and Node-Red that can monitoring and controlling water pump to watering the plant.',
        stack: ['Arduino', 'C++'],
        sourceCode: 'https://github.com/danasaurus45/iot-smart-watering-device',
    },
    {
        name: 'Kayon Company Profile',
        description: 'This project contains a company profile website of Kayon. Kayon itself is a company company that sells charcoal briquettes for export abroad. This project uses laravel framework',
        stack: ['PHP', 'JavaScript', 'Laravel'],
        sourceCode: 'https://github.com/danasaurus45/kayon-company-profile',
    },
    {
        name: 'Simonjap (Sistem Monitoring Jumlah Penduduk)',
        description: 'This project contains a web that can be used by the Dispendukcapil Kota Malang to help monitor the population in a certain period.',
        stack: ['PHP', 'JavaScript', 'CodeIgniter3'],
        sourceCode: 'https://github.com/danasaurus45/simonjap',
    },
]

const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML',
    'PHP',
    'CSS',
    'JavaScript',
    'MySQL',
    'React',
    'Git',
    'Arduino',
    'PLC Ladder Diagram',
    'C++'
]

const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'dimasardanapp@gmail.com',
}

export { header, about, projects, skills, contact }