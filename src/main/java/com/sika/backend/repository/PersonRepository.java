package com.sika.backend.repository;

import com.sika.backend.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person, Long> {
    boolean existsByNationalId(long id);
}
