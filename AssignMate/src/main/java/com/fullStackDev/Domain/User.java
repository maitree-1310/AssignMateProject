package com.fullStackDev.Domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDate;
import java.util.*;

@Entity
@Table(name="userTable")
public class User implements UserDetails {
    private static final long serialVersionUID = 1840361243951715062L;

    @Id
    private Long id;
    private String username;
    @JsonIgnore
    private String password;
    private String name;
    //@OneToMany(fetch = FetchType.EAGER, mappedBy = "user")
    //private Set<Authorities> authorities = new HashSet<>();
    private LocalDate cohortStartDate;
    private Integer bootcampDurationInWeeks;

    public User() {
    }

    public Integer getBootcampDurationInWeeks() {
        return bootcampDurationInWeeks;
    }

    public void setBootcampDurationInWeeks(Integer bootcampDurationInWeeks) {
        this.bootcampDurationInWeeks = bootcampDurationInWeeks;
    }

    public LocalDate getCohortStartDate() {
        return cohortStartDate;
    }

    public void setCohortStartDate(LocalDate cohortStartDate) {
        this.cohortStartDate = cohortStartDate;
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    @Override
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", name='" + name + '\'' +
                ", cohortStartDate=" + cohortStartDate +
                ", bootcampDuationInWeeks=" + bootcampDurationInWeeks +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id.equals(user.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
