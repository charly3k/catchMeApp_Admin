export type UserProfile = {
  access: "FREE_SUBSCRIBER" | "PAID_SUBSCRIBER"; // Assuming there might be other access levels
  createdDate: string;
  courseOfStudy: string | null;
  currentAge: string | null;
  currentCity: string | null;
  dateOfBirth: string | null; // YYYY-MM-DD format
  datingPreference: "male" | "female" | "other" | null;
  drinkingPreference: string | null; // Could specify possible values if known
  educationalLevel: "undergraduate" | "graduate" | "postgraduate" | null;
  email: string;
  firstName: string;
  funFactAboutYou: string | null;
  gender: "male" | "female" | "other";
  height: number | null; // Assuming height is in numeric format
  id: number;
  idealFirstDate: string | null;
  interests: Array<{ id: number; interestName: string }> | null; // Adjust fields based on actual structure
  isActive: boolean;
  isProfileBoosted: boolean;
  isProfilePrivate: boolean;
  isReadReceiptOn: boolean;
  isStudentEmailVerified: boolean | null;
  isUserDeactivated: boolean | null;
  isUserDeleted: boolean | null;
  lastActive: string | null; // Could further specify a time format
  lastName: string;
  lookingFor: string | null;
  phoneNumber: string | null;
  profileCompletionRate: number;
  religion: string | null;
  schoolName: string | null;
  smokingPreference: string | null; // Could specify possible values if known
  studentEmail: string | null;
  userBio: string | null;
  userDeletionReason: string | null;
  userLocationResponse: {
    userLocation: {
      latitude: number;
      longitude: number;
      city: string;
      country: string;
    };
  } | null;
  userPhoto: Array<{ imageUrl: string; isMain: boolean }> | null; // Adjust fields based on actual structure
  username: string;
  zodiacSign: string | null;
};

export type reportedUsers = {
  reportId: string;
  reportedUserId: string;
  reportedUserName: string;
  reportingUserId: string;
  reportingUserName: string;
  reportDate: string;
  reason: string;
};

export type AdminProfileType = {
  access: "ADMIN" | "SUPER_ADMIN";
  defaultPassword: null | string;
  email: string;
  firstname: string;
  id: string;
  isBlocked: boolean;
  lastname: string;
};

export type userAuditTrail = {
  userId: string;
  date: string;
  email: string;
  photos: string[];
  school: string;
  schoolEmail: string;
};

// Event API response types
export type EventData = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  venue: string;
  externalLink: string;
  schoolName: string;
  startTime: string;
  endTime: string;
  createdAt: string;
  reactionCount: number;
  commentCount: number;
  attendeeCount: number;
  maxAttendees: number;
  isCancelled: boolean;
  commentLocked: boolean;
  creatorId: number;
  creatorFirstName: string;
  creatorLastName: string;
  creatorProfilePhoto: string;
  shareLink: string;
};

export type PaginationInfo = {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  hasNext: boolean;
  nextPageUrl: string;
  hasPrevious: boolean;
  prevPageUrl: string;
  moreAvailable: boolean;
};

export type EventApiResponse = {
  requestId: string;
  timestamp: string;
  statusCode: number;
  status: string;
  message: string;
  userFriendlyMessage: string;
  data: EventData;
  errors: string[];
  userId: string;
  pagination: PaginationInfo;
  path: string;
  processingTimeMs: number;
  servedFromCache: boolean;
  truncated: boolean;
  truncationReason: string;
  baseResponseType: string;
};
