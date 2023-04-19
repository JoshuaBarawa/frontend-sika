package com.sika.backend.controller;

import com.sika.backend.model.Person;
import com.sika.backend.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/persons")
public class PersonController {
    @Autowired
    public PersonRepository personRepository;

    @GetMapping
    public List<Person> getAllPersons(){
        return personRepository.findAll();
    }

    @PostMapping
    public String createPerson(@RequestBody Person person){
        if(personRepository.existsByNationalId(person.getNationalId())){
            return "National ID already exists!";
        }
        else{
            personRepository.save(person);
            return "Contact created successfully";
        }
    }

    @GetMapping("{id}")
    public ResponseEntity<Person> getPersonById(@PathVariable long id){
        Person person = personRepository.findById(id).orElseThrow();
        return ResponseEntity.ok(person);
    }

    @PutMapping("{id}")
    public ResponseEntity<Person> updatePersonById(@PathVariable long id, @RequestBody Person person){
        Person updatedPerson = personRepository.findById(id).orElseThrow();
        updatedPerson.setFirst_name(person.getFirst_name());
        updatedPerson.setLast_name(person.getLast_name());
        updatedPerson.setCountry(person.getCountry());
        updatedPerson.setNationality(person.getNationality());
        updatedPerson.setBirthday(person.getBirthday());
        updatedPerson.setGender(person.getGender());
        updatedPerson.setNationalId(person.getNationalId());

        personRepository.save(updatedPerson);
        return ResponseEntity.ok(updatedPerson);
    }

    @DeleteMapping("{id}")
    public String deletePerson(@PathVariable long id){
        personRepository.deleteById(id);
        return "Person deleted successfully" + id;
    }

}
