package com.ale.impacthub.controller;

import com.ale.impacthub.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;


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

    @RestController
@RequestMapping("/api")
public class MainpageController {

    private final mainpageRepository mainpageRepository;

    @Autowired
    public MainpageController(mainpageRepository mainpageRepository) {
        this.mainpageRepository = mainpageRepository;
    }

    @GetMapping("/allEvents")
    public ResponseEntity<Iterable<Organisations>> getAllEvents() {
        return ResponseEntity.ok(OrganisationsRepository.findAll());
    }
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

    @DeleteMapping("/allEvents/{name_event}")
@Transactional
public ResponseEntity<String> deleteByNameEvent(@PathVariable("name_event") String name_event) {
    try {
        long deletedCount = mainpageRepository.deleteByname_event(name_event);
        
        if (deletedCount > 0) {
            return ResponseEntity.ok("Deleted " + deletedCount + " record(s)");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
               .body("No records found with name_event: " + name_event);
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
               .body("Error deleting record: " + e.getMessage());
    }
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