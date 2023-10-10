package com.factoriaAltF4.Nesting.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.factoriaAltF4.Nesting.models.Image;
import com.factoriaAltF4.Nesting.models.Property;
import com.factoriaAltF4.Nesting.models.UserProfile;
import com.factoriaAltF4.Nesting.repositories.PropertyRepository;

@Service
public class PropertyService {

    @Autowired
    PropertyRepository repo;

    @Autowired
    UserProfileService service;

    public List<Property> getAllProperties() {
        return repo.findAll();
    }

    public Property getPropertyById(Long id) {
        Optional<Property> opt = repo.findById(id);
        if (opt.isPresent()) {
            return opt.get();
        } else {
            return null;
        }
    }

    public Property addProperty(Property property, Long id) {
        UserProfile profile = service.getProfileById(id);
        List<Property> propertiesPubl = profile.getPropertiesPublished();
        propertiesPubl.add(property);
        property.setProfilePublished(profile);
        return repo.save(property);
    }

    public Property updateProperty(Property property, Long id) {
        Property existingProperty = getPropertyById(id);
        if (existingProperty != null) {
            existingProperty.setAddress(property.getAddress());
            existingProperty.setBaths(property.getBaths());
            existingProperty.setType(property.getType());
            existingProperty.setCity(property.getCity());
            existingProperty.setDescription(property.getDescription());
            existingProperty.setHouseType(property.getHouseType());
            existingProperty.setImages(property.getImages());
            existingProperty.setModificationDate(property.getModificationDate());
            existingProperty.setOwnermail(property.getOwnermail());
            existingProperty.setPostalCode(property.getPostalCode());
            existingProperty.setPrice(property.getPrice());
            existingProperty.setPublishDate(property.getPublishDate());
            existingProperty.setPropertiesContact(property.getPropertiesContact());
            existingProperty.setRooms(property.getRooms());
            existingProperty.setSize(property.getSize());
            existingProperty.setStatus(true);
            existingProperty.setTitle(property.getTitle());
            existingProperty.setType(property.getType());
            existingProperty.setProfilePublished(property.getProfilePublished());
            return repo.save(existingProperty);
        } else {
            return null;
        }

    }

    public void deleteProperty(Property property, Long id) {
        property = getPropertyById(id);
        repo.delete(property);
    }

    public Property updateStatus(Long id, boolean newStatus) {
        Property prop = getPropertyById(id);
        prop.setStatus(newStatus);
        return updateProperty(prop, id);
    }

    public Optional<List<Property>> getPropertyByType(String type) {
        return repo.findBytype(type);
    }

    public Property addImageToProp(String img, Long propId, Image image) {
        Property prop = getPropertyById(propId);
        image.setImg(img);
        image.setProperty(prop);
        prop.getImages().add(image);
        return repo.save(prop);
    }

}
