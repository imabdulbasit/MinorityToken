// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;


/**
 * Stores constant shared between the token and liquidity manager contracts
 * Prevents accidental mismatches between contracts
 */
contract MinorityShared {
    address constant public USDC = 0xD26a9DDC4108a6CcdA4E23c87b0Fb2bdD875D100; // Polygon USDC Mainnet address
    address constant public ROUTER = 0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff; // Quickswap Router address: 0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff
}