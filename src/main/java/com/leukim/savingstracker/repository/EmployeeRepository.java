package com.leukim.savingstracker.repository;

import com.leukim.savingstracker.model.Employee;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:3000")
public interface EmployeeRepository extends CrudRepository<Employee, Long> {
}
