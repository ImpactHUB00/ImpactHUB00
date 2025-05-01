package com.ale.impacthub;

import jakarta.persistence.*;

@Entity
@Table(name="volunteering_event")
public class mainpage{

    @Id
    @Column(name="id_org")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_org;
    @Column(name="id_event")
    private Long id_event;

    @Column(name="description")
    private String description;

    @Column(name="organisation_name")
    private String organisation_name;

    @Column(name="name_event")
    private String name_event;
    
    @Column(name="id_vol")
    private Long id_vol;
    
    public Long getid_vol() {
        return id_vol;
    }
public String getorganisation_name() {
        return organisation_name;
    }
    public void setorganisation_name(String organisation_name) {
        this.organisation_name= organisation_name;
    }
    public Long getid_event() {
        return id_event;
    }

    public void setid_event(Long id_event) {
        this.id_event= id_event;
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

    public String getname_event() {
        return name_event;
    }

    public void setname_event(String name_event) {
        this.name_event = name_event;
    }




}

