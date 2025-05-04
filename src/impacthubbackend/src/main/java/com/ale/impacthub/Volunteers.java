package com.ale.impacthub;


import jakarta.persistence.*;

@Entity
@Table(name="user_volunteers")
public class Volunteers{

    @Id
    @Column(name="id_vol")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_vol;

    @Column(name="username")
    private String username;

    @Column(name="email")
    private String email;
    @Column(name="county")
    private String county;

    @Column(name="age")
    private int age;

    @Column(name="first_name")
    private String first_name;
    
    @Column(name="last_name")
    private String last_name;

    public Long getid_vol() {
        return id_vol;
    }

    public void setid_vol(Long id_vol) {
        this.id_vol= id_vol;
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
    public int getage() {
        return age;
    }

    public void setage(int age) {
        this.age= age;
    }

    public String getfirst_name() {
        return first_name;
    }

    public void setfirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getlast_name() {
        return last_name;
    }

    public void setlast_name(String last_name) {
        this.last_name = last_name;
    }


}
