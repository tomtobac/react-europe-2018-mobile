export const ScheduleQuery = `
{
  events(slug: "reacteurope-2018") {
    id
    description
    websiteUrl
    name
    venueName
    venueCountry
    venueCity
    cocUrl
    twitterHandle
    offset
    startDate
    endDate
    timezoneId
    slug
    status{
      hasEnded
      hasStarted
      onGoing
      nextFiveScheduledItems {
        id
        title
        description
		avatarUrl
        startDate
        speakers {
          id
          name
          twitter
          bio
          talks {
            id
            description
            title
            startDate
          }
        }

      }
    }
    collaborators {
      id
      firstName
      lastName
      twitter
      github
      url
      role
      avatarUrl
    }
    speakers {
      id
      name
      twitter
      github
      avatarUrl
      bio
      talks {
        id
        title
        type
        description
        length
        startDate
      }
    }
    groupedSchedule {
      title
      date
      slots {
        id
        title
        description
        length
        startDate
        tags
        type
        room
        talk
        keynote
        speakers {
          id
          name
          twitter
          github
          avatarUrl
          bio
        }
      }
    }
    sponsors {
      diamond {
        id
        name
        description
        url
        logoUrl
        jobUrl
      }
      platinum {
        id
        name
        description
        url
        logoUrl
        jobUrl
      }
      gold {
        id
        name
        description
        url
        logoUrl
        jobUrl
      }
      partner {
        id
        name
        description
        url
        logoUrl
        jobUrl
      }
    }
  }
}
`;
