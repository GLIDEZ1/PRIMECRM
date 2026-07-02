export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role: 'SUPER_ADMIN' | 'ADMIN' | 'CUSTOMER';
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  avatarUrl?: string;
  emailVerified: boolean;
  twoFactorEnabled: boolean;
  lastLogin?: string;
  createdAt: string;
}

export interface Ticket {
  id: string;
  ticketNumber: string;
  title: string;
  description: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
  status: 'OPEN' | 'PENDING' | 'SOLVED' | 'CLOSED';
  category?: string;
  customerId?: string;
  assignedTo?: string;
  createdAt: string;
  updatedAt: string;
  resolvedAt?: string;
  closedAt?: string;
}

export interface Message {
  id: string;
  ticketId: string;
  senderId: string;
  content: string;
  messageType: 'TEXT' | 'SYSTEM' | 'NOTE';
  isInternal: boolean;
  aiGenerated: boolean;
  createdAt: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  content?: string;
  type: 'EMAIL' | 'PUSH' | 'IN_APP';
  isRead: boolean;
  createdAt: string;
  readAt?: string;
}

export interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  openTickets: number;
  closedTickets: number;
  revenue: number;
  averageResolutionTime: number;
}
