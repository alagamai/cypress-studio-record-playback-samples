beforeEach(() => {
	cy.visit('https://automationteststore.com/');
});

describe('record and playback using cypress studio feature', () => {
	/* ==== Test Created with Cypress Studio ==== */
	it('Shop at autostore', function () {
		/* ==== Generated with Cypress Studio ==== */
		cy.visit('https://automationteststore.com/');
		cy.get(
			'#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .productcart > .fa'
		).click();
		cy.get(
			'#block_frame_featured_1769 > .thumbnails > :nth-child(3) > .thumbnail > .pricetag > .productcart > .fa'
		).click();
		cy.get(':nth-child(2) > .btn > .fa').click({ force: true });
		cy.get('.dropdown-toggle > .label').should('have.text', '3');
		cy.get(':nth-child(2) > .btn > .fa').click({ force: true });
		cy.get('.newcustomer > .heading2').should(
			'have.text',
			'I am a new customer.'
		);
		cy.get('#accountFrm > fieldset > :nth-child(2) > label').should(
			'have.text',
			'\n\t\t\n\t\t\t\t Guest Checkout  \n\t'
		);
		cy.get('#accountFrm_accountguest').check();
		cy.get('#accountFrm > fieldset > .btn').click();
		cy.get('.maintext').should('have.text', 'Guest Checkout - Step 1');
		cy.get('#guestFrm_firstname').type('Rocio');
		cy.get('#guestFrm_lastname').type('Morar');
		cy.get('#guestFrm_email').type('Carson20@yahoo.com');
		cy.get('#guestFrm_telephone').type('(710) 249-5541');
		cy.get('#guestFrm_address_1').type('3906 Queen Circle');
		cy.get('#guestFrm_city').type('Lafayetteside');
		cy.get('#guestFrm_zone_id').select('3516');
		cy.get('#guestFrm_postcode').type('15491');
		cy.get('.col-md-12 > .btn-orange').click();
		cy.get('.maintext').should('be.visible');
		cy.get(':nth-child(3) > :nth-child(2) > .bold').should(
			'have.class',
			'totalamout'
		);
		cy.get('#checkout_btn').click();
		cy.get('.maintext').should('have.text', ' Your Order Has Been Processed!');
		cy.get('.mb40 > :nth-child(6)').click();
		cy.get('.mb40 > .btn').should('be.visible');
		cy.get('.mb40 > .btn').click();
		/* ==== End Cypress Studio ==== */
	});

	/* ==== Test Created with Cypress Studio ==== */
	it('Add products to cart from home page', function () {
		/* ==== Generated with Cypress Studio ==== */
		cy.get(
			'#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .productcart > .fa'
		).click();
		cy.get(
			'#block_frame_latest_1770 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .productcart > .fa'
		).click();
		cy.get(
			'#block_frame_latest_1770 > .thumbnails > :nth-child(2) > .thumbnail > .pricetag > .productcart > .fa'
		).click();
		cy.get('.dropdown-toggle > .label').should('have.text', '3');
		/* ==== End Cypress Studio ==== */
	});
});
