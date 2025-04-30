package com.ale.impacthub;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface mainpageRepository extends CrudRepository<mainpage, Long> {

   mainpage findByname_event(String name_event);

   long deleteByname_event(String name_event);

   <S extends mainpage> S save(S id_event);
}