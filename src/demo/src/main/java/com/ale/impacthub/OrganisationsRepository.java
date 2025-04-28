package com.ale.impacthub;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrganisationsRepository extends CrudRepository<Organisations, Long> {

    long deleteByname_organisation(String name_organisation);

   Organisations findByname_organisation(String name_organisation);
}