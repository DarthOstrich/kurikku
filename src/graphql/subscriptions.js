/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser($owner: String!) {
  onCreateUser(owner: $owner) {
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
export const onUpdateUser = `subscription OnUpdateUser($owner: String!) {
  onUpdateUser(owner: $owner) {
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
export const onDeleteUser = `subscription OnDeleteUser($owner: String!) {
  onDeleteUser(owner: $owner) {
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
export const onCreateAgency = `subscription OnCreateAgency {
  onCreateAgency {
    id
    title
  }
}
`;
export const onUpdateAgency = `subscription OnUpdateAgency {
  onUpdateAgency {
    id
    title
  }
}
`;
export const onDeleteAgency = `subscription OnDeleteAgency {
  onDeleteAgency {
    id
    title
  }
}
`;
export const onCreateCampaign = `subscription OnCreateCampaign {
  onCreateCampaign {
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
export const onUpdateCampaign = `subscription OnUpdateCampaign {
  onUpdateCampaign {
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
export const onDeleteCampaign = `subscription OnDeleteCampaign {
  onDeleteCampaign {
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
export const onCreateTask = `subscription OnCreateTask {
  onCreateTask {
    id
    title
    description
    status
  }
}
`;
export const onUpdateTask = `subscription OnUpdateTask {
  onUpdateTask {
    id
    title
    description
    status
  }
}
`;
export const onDeleteTask = `subscription OnDeleteTask {
  onDeleteTask {
    id
    title
    description
    status
  }
}
`;
export const onCreatePrivateNote = `subscription OnCreatePrivateNote($owner: String!) {
  onCreatePrivateNote(owner: $owner) {
    id
    content
    owner
  }
}
`;
export const onUpdatePrivateNote = `subscription OnUpdatePrivateNote($owner: String!) {
  onUpdatePrivateNote(owner: $owner) {
    id
    content
    owner
  }
}
`;
export const onDeletePrivateNote = `subscription OnDeletePrivateNote($owner: String!) {
  onDeletePrivateNote(owner: $owner) {
    id
    content
    owner
  }
}
`;
