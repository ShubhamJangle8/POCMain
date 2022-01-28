export const filter = [
  {
    id: 1,
    question: 'Status',
    answer: ['Open', 'In Progress', 'On Hold', 'Closed', 'Cancelled']
  },
  {
    id: 2,
    question: 'Grade',
    answer: ['Analyst', 'Senior Analyst', 'Assosciate Consultant', 'Consultant', 'Senior Consultant']
  },
  {
    id: 3,
    question: 'Technologies',
    answer: []

  },
  {
    id: 4,
    question: 'Cluster',
    answer: ['DSI', 'R&S- Range & Supply', 'R&E', 'Multi-Channel', 'R&S - Supply Execution']
  },
  {
    id: 5,
    question: 'SubCluster',
    answer: [{
      'Cluster': 'DSI',
      'SubCluster': ['Planning & Experience', 'ISell', 'Integration']
    }, {
      'Cluster': 'R&E',
      'SubCluster': ['Hi']
    }]
  },
  {
    id: 6,
    question: 'Duration',
    answer: []
  }
]