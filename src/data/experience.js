const data = [
  {
    title: 'SAP Canada Inc.',
    role: 'Agile Developer Co-Op',
    duration: 'May 2022 - Dec 2022',
    image: '/img/sap.svg',
    link: 'https://www.sap.com/canada/index.html',
    description: [
      'Coordinated with senior engineers to implement a layered cache resiliency system involving several core' +
        'microservices to ensure 99%+ uptime, developed accompanying documentation and testing strategies',
      'Analyzed artifact build pipeline to expose regression-related variations between local and cloud deployments',
      'Prioritized and managed 80+ concurrent Jira tickets involving new features or fixes to existing systems',
      'Refactored core system dependencies and designed asynchronous logic to adhere to architectural standards',
      'Created and maintained several automated Jest and Jasmine testing suites to achieve 98%+ code coverage',
      'Verified proposed changes with remote Jenkins, local Node.js, and cloud-based Kubernetes environments',
      'Conducted code reviews and knowledge transfer sessions to improve existing practices and code quality',
    ],
    skills: [
      'JavaScript',
      'Python',
      'SQL',
      'Jira',
      'Jest',
      'Jasmine',
      'Jenkins',
      'Node.js',
      'Kubernetes',
      'Webpack',
      'Maven',
      'Grafana',
      'Prometheus',
      'Git',
      'Gerrit',
    ],
  },
  {
    title: 'Sony Pictures Imageworks',
    role: 'Systems Engineer Co-Op',
    duration: 'Jan 2020 - Sept 2020',
    image: '/img/sony.svg',
    invert: true,
    link: 'https://www.imageworks.com/',
    description: [
      'Resolved 200+ tickets relating to performance or configuration issues on production level Linux machines',
      'Designed a project management system involving an SQL database, user-based permission sharing, cached' +
        'data retrieval, and integration with the google app suite to improve department productivity and efficiency',
      'Reduced Dialogflow chatbot prompt failures by 87% and implemented an automated analytics dashboard',
      'Created an application using less than 1% of system resources to safely reboot machines with large uptimes',
      'Developed a Django app using the Jamf API to efficiently manage Apple devices and display usage statistics',
      'Received a film credit for the Animated Film: The Sea Beast',
    ],
    skills: [
      'JavaScript',
      'Python',
      'SQL',
      'C++',
      'HTML',
      'CSS',
      'Google Apps Script',
      'Google Cloud Platform (GCP)',
      'Jamf',
      'Django',
      'Dialogflow',
      'Linux',
    ],
  },
];

export default data;
