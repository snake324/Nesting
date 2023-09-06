package com.factoriaAltF4.Nesting.models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "properties")
@Data
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "description", length = 3000)
    private String description;

    @Column(name = "publish_date")
    private LocalDate publishDate;

    @Column(name = "city")
    private String city;

    @Column(name = "postal_code")
    private Integer postalCode;

    @Column(name = "rooms")
    private Integer rooms;

    @Column(name = "baths")
    private Integer baths;

    @Column(name = "size")
    private Integer size; 

    @Column(name = "price")
    private Integer price;

    @JsonIgnore
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name="properties_profile", joinColumns = @JoinColumn(name="property_id"), inverseJoinColumns = @JoinColumn(name= "profile_id"))
    public List<UserProfile> userProfiles;

    @OneToMany(mappedBy = "property")
    public List<Image> images;

}
