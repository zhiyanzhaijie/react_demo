export interface EmployeeRequest {
  name: string
  departmentId: number | void
}

interface EmployeeInfo {
  id: number
  key: number
  name: string
  department: string
  hiredate: string
  level: string
}

export type EmployeeResponse = EmployeeInfo[] | void
