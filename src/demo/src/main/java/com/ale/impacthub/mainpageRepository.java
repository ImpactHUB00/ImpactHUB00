package ImpactHUB00.src.demo.src.main.java.com.ale.impacthub;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrganisationsRepository extends CrudRepository<Organisations, Long> {

    long deleteByusername(String username);

   Organisations findByusername(String username);
}