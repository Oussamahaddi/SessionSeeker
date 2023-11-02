export type CategoryT = {
  name: string,
  id: string,
}

export type SingleCategoryT = {
  name: string,
  id: string,
  sessions : SessionsT[];
}

export type SessionsT = {
  name: string,
  id: string,
  desc: string,
  speaker : SpeakerT
}

export type SpeakerT = {
    name: string,
    title: string,
    org: string,
    bio: string,
}

