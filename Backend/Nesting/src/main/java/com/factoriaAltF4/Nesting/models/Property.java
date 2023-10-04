package com.factoriaAltF4.Nesting.models;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.List;
import java.util.Set;

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

    @Column(name = "city")
    private String city;

    @Column(name = "postal_code")
    private String postalCode;

    @Column(name = "address", nullable = true)
    private String address;

    @Column(name = "rooms")
    private int rooms;

    @Column(name = "baths")
    private int baths;

    @Column(name = "size")
    private Double size;

    @Column(name = "price")
    private Double price;

    @Column(name = "type")
    private String type;

    @Column(name = "status")
    private boolean status;

    @Column(name = "house_type")
    private String houseType;

    @Column(name = "publish_date")
    private LocalDate publishDate;

    @Column(name = "modification_date", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Timestamp modificationDate;

    // @JsonIgnore
    // @ManyToMany(fetch = FetchType.EAGER)
    // @JoinTable(name = "contacts", joinColumns = @JoinColumn(name =
    // "property_id"), inverseJoinColumns = @JoinColumn(name = "profile_id"))
    // public List<UserProfile> userProfiles;
    // TODO contact_date as field of the generated table.

    @OneToMany(mappedBy = "property", cascade = CascadeType.REMOVE)
    public List<Image> images;

    @OneToMany(mappedBy = "property")
    private Set<Contacts> propertiesContact;

    @ManyToOne
    @JoinColumn(name = "fk_user_profile_published")
    @JsonIgnore
    public UserProfile profilePublished;

    @Column(name = "owner_mail")
    private String ownermail;

}
