package com.ale.impacthub;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface mainpageRepository extends CrudRepository<Organisations, Long> {

   Organisations findByname_event(String name_event);

   long deleteByname_event(Long name_event);

   void save(mainpage event);
}