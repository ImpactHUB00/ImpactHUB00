package com.ale.impacthub;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface VolunteersRepository extends CrudRepository<Volunteers, Long> {

    long deleteByusername(String username);

   Volunteers findByusername(String username);
}