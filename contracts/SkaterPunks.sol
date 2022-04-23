// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract SkaterPunks is ERC721A, Ownable {

    uint256 public cost;
    uint256 public maxSupply;

    constructor(
        string memory _tokenName,
        string memory _tokenSymbol,
        uint256 _cost,
        uint256 _maxSupply
    ) ERC721A(_tokenName, _tokenSymbol) {
        cost = _cost;
        maxSupply = _maxSupply;
    }

    /// @notice Check that the mint amount is valid
    modifier mintCompliance(uint256 _mintAmount) {
        require(_mintAmount > 0, "SkaterPunks: Invalid mint amount!");
        require(totalSupply() + _mintAmount <= maxSupply, "SkaterPunks: Max supply exceeded!");
        _;
    }

    /// @notice Check that the payment amount is sufficient
    modifier mintPriceCompliance(uint256 _mintAmount) {
        require(msg.value >= cost * _mintAmount, "SkaterPunks: Insufficient funds!");
        _;
    }

    /// @notice Mint `_mintAmount` tokens for `msg.sender`
    function mint(uint256 _mintAmount) public payable mintCompliance(_mintAmount) mintPriceCompliance(_mintAmount) {
        _safeMint(_msgSender(), _mintAmount);
    }
}
