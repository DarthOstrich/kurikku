/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    cognitoID
    agency {
      id
      title
    }
    role
    owner
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      cognitoID
      agency {
        id
        title
      }
      role
      owner
    }
    nextToken
  }
}
`;
export const getAgency = `query GetAgency($id: ID!) {
  getAgency(id: $id) {
    id
    title
  }
}
`;
export const listAgencys = `query ListAgencys(
  $filter: ModelAgencyFilterInput
  $limit: Int
  $nextToken: String
) {
  listAgencys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
    }
    nextToken
  }
}
`;
export const getCampaign = `query GetCampaign($id: ID!) {
  getCampaign(id: $id) {
    id
    title
    createdAt
    active
    agency {
      id
      title
    }
  }
}
`;
export const listCampaigns = `query ListCampaigns(
  $filter: ModelCampaignFilterInput
  $limit: Int
  $nextToken: String
) {
  listCampaigns(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      createdAt
      active
      agency {
        id
        title
      }
    }
    nextToken
  }
}
`;
export const getTask = `query GetTask($id: ID!) {
  getTask(id: $id) {
    id
    title
    description
    status
  }
}
`;
export const listTasks = `query ListTasks(
  $filter: ModelTaskFilterInput
  $limit: Int
  $nextToken: String
) {
  listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      status
    }
    nextToken
  }
}
`;
export const getPrivateNote = `query GetPrivateNote($id: ID!) {
  getPrivateNote(id: $id) {
    id
    content
    owner
  }
}
`;
export const listPrivateNotes = `query ListPrivateNotes(
  $filter: ModelPrivateNoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listPrivateNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      owner
    }
    nextToken
  }
}
`;
