package com.ale.impacthub.controller;

import com.ale.impacthub.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Controller
public class MainController {

    private static final int Iterable = 0;

    @Autowired
    private VolunteersRepository VolunteersRepository;

    @Autowired
    private OrganisationsRepository OrganisationsRepository;

    @Autowired
    private mainpageRepository mainpageRepository;


    
    // Get all entries

    @GetMapping(path="/allVolunteers")
    public @ResponseBody Iterable<Volunteers> getAllVolunteers() {
        return VolunteersRepository.findAll();
    }

    @GetMapping(path="/allOrganisations")
    public @ResponseBody Iterable<Organisations> getAllOrganisations() {
        return OrganisationsRepository.findAll();
    }

    @GetMapping(path="/allmainpage")
    public @ResponseBody Iterable<mainpage> getAllmainpage() {
        int mainpage;
        return Iterable<mainpage> result <= (Iterable<mainpage>) mainpageRepository.findAll();
    }

    

    // Delete entry by Id

    @DeleteMapping(path="/allVolunteers/{username}")
    @Transactional
    public @ResponseBody HttpStatus deleteByUsername(@PathVariable("username") String username ) {
        Long result = VolunteersRepository.deleteByusername(username);

        return result == 1 ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
    }

    @DeleteMapping(path="/allOrganiations/{name_organisation}")
    @Transactional
    public @ResponseBody HttpStatus deleteByname_organisation(@PathVariable("name_organisation") String name_organisation) {
        Long result = OrganisationsRepository.deleteByname_organisation(name_organisation);

        return result == 1 ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
    }

    @DeleteMapping(path="/allmainpage/{name_event}")
    @Transactional
    public @ResponseBody HttpStatus deleteByname_event(@PathVariable("name_event") Long name_event) {

        long result = mainpageRepository.deleteByname_event(name_event);

        return (result == 1 &&  Volunteer== 1) ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
    }


    // Create entries

    @PostMapping(path="/allVolunteers")
    @Transactional
    public @ResponseBody HttpStatus createVolunteer(@RequestBody Volunteers volunteer) {
        VolunteersRepository.save(volunteer);
        return HttpStatus.CREATED;
    }


    @PostMapping(path="/allOrganisations")
    @Transactional
    public @ResponseBody HttpStatus createOrganisation(@RequestBody Organisations organisation) {
        OrganisationsRepository.save(organisation);
        return HttpStatus.CREATED;
    }

    @PostMapping(path="/allmainpage")
    @Transactional
    public @ResponseBody HttpStatus createevent(@RequestBody mainpage event) {
        mainpageRepository.save(event);
        return HttpStatus.CREATED;
    }

   
}