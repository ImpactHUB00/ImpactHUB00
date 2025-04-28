package ImpactHUB00.src.demo.src.main.java.com.ale.impacthub;

import javax.persistence.*;

@Entity
@Table(name="user_organisations")
public class Organisations{

    @Id
    @Column(name="id_org")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_org;

    @Column(name="description")
    private String description;
    
    @Column(name="id_vol")
    private Long id_vol;
    
    public Long getid_vol() {
        return id_vol;
    }

    public void setid_vol(Long id_vol) {
        this.id_vol= id_vol;
    }

    public Long getid_org() {
        return id_org;
    }

    public void setid_org(Long id_org) {
        this.id_org= id_org;
    }

    public String getdescription() {
        return description;
    }

    public void setdescription(String description) {
        this.description = description;
    }




}

