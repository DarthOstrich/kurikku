/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
export const updateUser = `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
export const deleteUser = `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
export const createAgency = `mutation CreateAgency(
  $input: CreateAgencyInput!
  $condition: ModelAgencyConditionInput
) {
  createAgency(input: $input, condition: $condition) {
    id
    title
  }
}
`;
export const updateAgency = `mutation UpdateAgency(
  $input: UpdateAgencyInput!
  $condition: ModelAgencyConditionInput
) {
  updateAgency(input: $input, condition: $condition) {
    id
    title
  }
}
`;
export const deleteAgency = `mutation DeleteAgency(
  $input: DeleteAgencyInput!
  $condition: ModelAgencyConditionInput
) {
  deleteAgency(input: $input, condition: $condition) {
    id
    title
  }
}
`;
export const createCampaign = `mutation CreateCampaign(
  $input: CreateCampaignInput!
  $condition: ModelCampaignConditionInput
) {
  createCampaign(input: $input, condition: $condition) {
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
export const updateCampaign = `mutation UpdateCampaign(
  $input: UpdateCampaignInput!
  $condition: ModelCampaignConditionInput
) {
  updateCampaign(input: $input, condition: $condition) {
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
export const deleteCampaign = `mutation DeleteCampaign(
  $input: DeleteCampaignInput!
  $condition: ModelCampaignConditionInput
) {
  deleteCampaign(input: $input, condition: $condition) {
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
export const createTask = `mutation CreateTask(
  $input: CreateTaskInput!
  $condition: ModelTaskConditionInput
) {
  createTask(input: $input, condition: $condition) {
    id
    title
    description
    status
  }
}
`;
export const updateTask = `mutation UpdateTask(
  $input: UpdateTaskInput!
  $condition: ModelTaskConditionInput
) {
  updateTask(input: $input, condition: $condition) {
    id
    title
    description
    status
  }
}
`;
export const deleteTask = `mutation DeleteTask(
  $input: DeleteTaskInput!
  $condition: ModelTaskConditionInput
) {
  deleteTask(input: $input, condition: $condition) {
    id
    title
    description
    status
  }
}
`;
export const createPrivateNote = `mutation CreatePrivateNote(
  $input: CreatePrivateNoteInput!
  $condition: ModelPrivateNoteConditionInput
) {
  createPrivateNote(input: $input, condition: $condition) {
    id
    content
    owner
  }
}
`;
export const updatePrivateNote = `mutation UpdatePrivateNote(
  $input: UpdatePrivateNoteInput!
  $condition: ModelPrivateNoteConditionInput
) {
  updatePrivateNote(input: $input, condition: $condition) {
    id
    content
    owner
  }
}
`;
export const deletePrivateNote = `mutation DeletePrivateNote(
  $input: DeletePrivateNoteInput!
  $condition: ModelPrivateNoteConditionInput
) {
  deletePrivateNote(input: $input, condition: $condition) {
    id
    content
    owner
  }
}
`;
