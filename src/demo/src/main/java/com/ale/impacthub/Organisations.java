package ImpactHUB00.src.demo.src.main.java.com.ale.impacthub;

import javax.persistence.*;

@Entity
@Table(name="user_organisations")
public class Organisations{

    @Id
    @Column(name="id_org")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_org;

    @Column(name="username")
    private String username;

    @Column(name="email")
    private String email;
    @Column(name="county")
    private String county;

    @Column(name="name_organisation")
    private String name_organisation;
    


    public Long getid_org() {
        return id_org;
    }

    public void setid_org(Long id_org) {
        this.id_org= id_org;
    }

    public String getusername() {
        return username;
    }

    public void setusername(String username) {
        this.username = username;
    }

    public String getemail() {
        return email;
    }

    public void setemail(String email) {
        this.email = email;
    }
    public String getcounty() {
        return county;
    }

    public void setcounty(String county) {
        this.county = county;
    }

    public String getname_organisation() {
        return name_organisation;
    }

    public void setname_organisation(String name_organisation) {
        this.name_organisation = name_organisation;
    }




}
