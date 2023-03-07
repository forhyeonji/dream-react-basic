export default function personReducer(person, action) {
  switch (action.type) {
    case 'updated': {
      const { prev, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          return mentor.name === prev ? { ...mentor, name: current } : mentor;
        })
      };
    }

    case 'added': {
      const { name, title } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name, title }]
      };
    }

    case 'deleted': {
      const { fire } = action;
      return {
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== fire)
      };
    }
    default: {
      throw new Error(`알 수 없는 액션 타입이다: ${action.type}`);
    }
  }
}
