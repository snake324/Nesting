package com.factoriaAltF4.Nesting.models;

import java.sql.Timestamp;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "contacts")
@Data
public class Contacts {

    @ManyToOne
    @Id
    @JsonIgnore
    @JoinColumn(name = "id_property")
    private Property property;

    @ManyToOne
    @Id
    @JsonIgnore
    @JoinColumn(name = "id_profile")
    private UserProfile profile;

    @Column(name = "contact_date", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Timestamp contactDate;

}
